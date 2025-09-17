
import { images } from '@/Data/ProjectData';
import ProjectCard from './ProjectCard';
import Slider from '@/constant/Slider';

const Projects = () => {
    return (
        <div id='projects'>
            <div className="relative px-6 mt-10 mb-10 md:mt-0  mx-auto max-w-5xl text-center">
                <h2 className="block w-full text-black font-bold text-3xl sm:text-4xl">
                    Discover Our Impactful Work
                </h2>
                <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
                    At The Stockit, we take pride in our diverse portfolio of projects that demonstrate our commitment to delivering exceptional digital solutions.
                </p>
            </div>
            <Slider>
                {/* Map over images array to create slides */}
                {images.map((image, index) => (
                    <ProjectCard image={image} index={index} key={index} />
                ))}
                {/* Duplicate slides for infinite effect */}
                {images.map((image, index) => (
                    <ProjectCard image={image} index={index} key={index} />

                ))}
            </Slider>
        </div>
    )
}

export default Projects;
