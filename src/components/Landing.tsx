import Image from "next/image"

const Landing = () => {
  return (
    <div className="min-h-screen p-2 lg:p-10 font-AdobeGaramond justify-center">
      <div className="grid md:grid-cols-2 gap-5  place-items-center ">
        <div>
          <Image
            src="/peggy.jpg"
            alt="Peggy Ama Boadi the Lawyer"
            width={500}
            height={400}
            priority={true}
            className="m-0 h-auto grayscale dark:grayscale-0"
          />
        </div>
        <div className="flex text-justify md:text-left mt-10 md:mt-0 flex-col gap-10 justify-center leading-relaxed">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nobis ut, provident porro
            quo enim voluptatibus accusantium amet fugit, ratione cum eaque culpa aliquid. Cum
            voluptates repudiandae sit quam modi. Deserunt qui, facilis tenetur commodi ex temporibus
            sequi dolorem dolor inventore eos, corrupti ipsam dignissimos quae reprehenderit culpa
            voluptates, harum error quos blanditiis. Unde fugit exercitationem praesentium quod qui
            sint? Officia assumenda sapiente in! Earum exercitationem inventore eveniet magni ratione
            iust.
          </p>
  
          <p>
            iusto, laboriosam provident dolore nulla temporibus maiores perspiciatis iste ducimus quae
            illum debitis at, culpa aut reprehenderit enim vero? Mollitia. Sequi ullam veritatis
            obcaecati consectetur et quam quibusdam quod similique expedita nostrum alias quas
            consequatur, perferendis repellat doloremque impedit nisi assumenda sunt architecto optio
            harum atque dolor dolore fugit. Sint? Corporis earum sint facilis exercitationem
            accusantium voluptatibus, cum velit laboriosam culpa delectus expedita laudantium ut
            deserunt ea facere! Ex optio quia veniam maxime fugit temporibus accusantium, dolorem
            delectus vero nobis! iusto
          </p>
          <p className="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vitae blanditiis eaque,
            laboriosam saepe placeat aperiam, magni rerum non nesciunt dolorum impedit reiciendis
            laudantium autem culpa? Quasi ducimus dicta laudantium! Sunt, cum! Sit nam deserunt sunt
            explicabo molestias quisquam nisi natus impedit minus necessitatibus? Doloribus, nobis
            reiciendis animi magnam corporis odio suscipit saepe voluptatum vel corrupti dolorem
            blanditiis. Consequatur, accusantium!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Landing
