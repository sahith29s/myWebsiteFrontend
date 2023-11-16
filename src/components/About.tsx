const AboutUs = () => {
    return (
        <div className="bg-gradient-to-r pb-5 from-blue-200 to-blue-400 min-h-screen">
            <header className="bg-green-500 text-white text-center py-8">
                <h1 className="text-4xl font-extrabold font-serif">About Me</h1>
            </header>
            <section className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800 font-amita">Meet Me</h2>
                <div className="flex flex-col md:flex-row items-center mb-6">
                    <div className="md:w-1/2 md:mr-4">
                        <img src="https://img.freepik.com/free-photo/3d-portrait-high-school-teenager_23-2150793939.jpg?t=st=1700136870~exp=1700140470~hmac=9adc7c504e8d791b1f1206297f43f7a9662f518ccb7a24da0b2b1e16baa7f4e2&w=360" alt="Student" className="w-full h-[30rem] object-contain rounded-[7rem]" />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-[1.6rem] text-orange-500 font-semibold mb-4 font-amita ">Sahith</h3>
                        <p className="text-gray-700 leading-loose font-amita">
                            Hi, I'm <span className="text-purple-950 text-[1.1rem] font-extrabold">Sahith</span> a proud student at Class 11. Every day, I walk through the doors of our school with excitement and curiosity, ready to embark on a new learning adventure. The supportive environment and dedicated educators at Class 11 have fueled my passion for knowledge and encouraged me to explore beyond textbooks.
                        </p>
                        <p className="text-gray-700 font-amita leading-loose">
                            Class 11 is not just a school; it's a second home where I've built lasting friendships and discovered my interests. From engaging lessons to fun extracurricular activities, every aspect of Class 11 contributes to my growth and development.
                        </p>
                    </div>
                </div>
                <div className="">
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
