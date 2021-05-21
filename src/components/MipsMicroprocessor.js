import React from "react";
import microprocessor from "../mipsPipe.png";


export default function MipsMicroprocessor(){
  return (
    <main>
      <section
      className="absolute inset-y-24 object-cover w-full"
      >
        <h1
        className="text-6xl text-black font-bold cursive home-name text-center relative inset-y-4"
        style={{color: "#374151"}}>
        MIPS Pipelined Microprocessor
        </h1><br></br><br></br><br></br>
        <div className="pl-2 pr-2 space-y-4">

            <img
              src={microprocessor}
              alt="MIPS Microprocessor Diagram"
              className="mx-auto"
            />

            <h2
            className="text-6xl text-black font-bold cursive home-name1 relative inset-y-8" style={{color: "#374151"}}>Project Description</h2><br></br>
            <p1
            className="relative inset-y-4" style={{color: "#374151"}}>
            The diagram above may seem like an encumbered mess with no sense to be taken away from it, however, it is the diagram of a project I completed in
            the fall of 2019: a MIPS Pipelined Processor. It may not be immediately clear what that is, but I will explain.
            </p1><br></br>

            <p2
            className="relative inset-y-9" style={{color: "#374151"}}>
            The processor of a computer is the brains of the whole operation, and its main job is essentially taking inputs and providing the correct output.
            The decisions for the computer are calculated and made here, at the processor. The overall goal of the processor we built was to handle what is
            called the MIPS Instruction Set, which you could think about like a language. If we were the head of a restaurant in Spain, you would likely have
            to learn Spanish first, before you were able to properly process the instructions that you would receive on a daily basis. It’s a similar thought
            with the MIPS Instruction Set. Instructions are in a given format, and we need to make sense of them with our processor.
            </p2><br></br>

            <p3
            className="relative inset-y-14" style={{color: "#374151"}}>
    ​        Furthermore, consider the control room in an airport, where like a processor, all the decisions are made. There are many different people who have
            completely different roles in the control room, that’s how a processor is also constructed: through the combination of a bunch of independent components
            who have different jobs, and then bringing them all together to create a greater whole. That is what is shown in the diagram above, all of the various
            components hooked up together, so that the channels of communication are clear.
            </p3><br></br>

            <p1
            className="relative inset-y-20" style={{color: "#374151"}}>
            This was a partner project, but over the course of a month that we had to work on it, I alone poured in almost 70 hours working on diagraming, logic
            decisions, and overall design and construction of the processor. Over those weeks, I learned about how to avoid data dependencies when two separate
            instructions are reliant on one another for their own output, and that proved to be quite a tricky debacle, as it was very tedious work. I also learned
            how to fully collaborate with someone on a large-scale project. In the past none of my projects have ever been this massive, and so it was nice to be
            able to easily collaborate with my partner through services like slack, GitHub, and others. I also learned how to use VHDL, which stands for Verilog
            Hardware Description Language, which I think could be useful going forward in my classes as well in my profession if I end up down the embedded systems
            path of Computer Engineering. My personal contribution to this project though, was significant. I was solely responsible for the designs, and so through
            diagramming and making lots of tables, I was eventually able to end up with the lovely diagram you see above. Furthermore, I had the majority responsibility
            for the actual construction of the final processor in VHDL, and it was I who eventually got the large part of our processor functioning as we expected it to.
            That isn’t to take away from my partner, who worked very hard as well, but more to give credit to the complexity of the project itself.
            </p1><br></br>

            <p1
            className="relative inset-y-28" style={{color: "#374151"}}>
            This application is an old version of modern technology. Some computer processors now are able to make trillions of calculations in a second’s time, which is
            incredible. Computer engineers are always trying to move forward the hardware that they’re putting into their machines, and so applications like this could
            have greater importance going forward, because one of use graduating after taking CprE 381 will hopefully go into research and design some awesome new technology
            that will take computer processing the furthest its ever gone. In my personal future, I think that the lessons and overall appreciation for large-scale systems
            will be something I will remain cognizant of and will utilize in my approach to solving any given task or problem that I’m confronted with.
            </p1><br></br>
        </div>


      </section>
    </main>
  )


}
