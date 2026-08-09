import { Children, isValidElement, type ReactNode } from 'react';

export const cleanHeadingText = (raw: string): string =>
  String(raw || '')
    .replace(/\r?\n/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/[*_~>#]+/g, ' ')
    .replace(/\p{Extended_Pictographic}/gu, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

export const slugify = (raw: string): string =>
  cleanHeadingText(raw)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

export const nodeToText = (node: ReactNode): string => {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(nodeToText).join('');
  if (isValidElement(node)) {
    const { children } = node.props as { children?: ReactNode };
    return nodeToText(children);
  }
  return '';
};
