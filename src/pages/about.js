import React, { Component } from "react";
import AboutImg from "../assets/img/dummy/d1.jpg";
import AboutImg2 from "../assets/img/dummy/d2.jpg";

class About extends Component {
  render() {
    return (
      <section className="text-gray-600 body-font">
        <div className="section-menu-hero lg:text-center py-32 flex items-center justify-center">
          <h2 className="title-font section-title text-center text-5xl text-gray-50 font-semibold tracking-wide uppercase">
            A Cup of History
          </h2>
        </div>
        <div className="container py-24 md:mx-auto md:max-w-6xl px-5 lg:px-0">
          <p className="uppercase text-xl font-bold tracking-tight text-gray-900 text-center">
            NOW A DAYS
          </p>
          <div className="font-medium mt-16 mb-16 text-base lg:text-xl text-slate-500 lg:mx-auto text-justify">
            <p className="py-3">
              Wild coffee plants, probably from Kefa (Kaffa), Ethiopia, were
              taken to southern Arabia and placed under cultivation in the 15th
              century. One of many legends about the discovery of coffee is that
              of Kaldi, an Arab goatherd who was puzzled by the strange antics
              of his flock. About 850 CE Kaldi supposedly sampled the berries of
              the evergreen bush on which the goats were feeding and, on
              experiencing a sense of exhilaration, proclaimed his discovery to
              the world.
            </p>

            <img
              src={AboutImg}
              className="py-3 w-full h-72 object-cover rounded-lg"
            />
            <p className="py-3">
              Whatever the actual origin of coffee, its stimulating effect
              undoubtedly made it popular. Ironically, though Islamic
              authorities pronounced the drink intoxicating and therefore
              prohibited by the Qurʾān, many Muslims were attracted to the
              beverage as a substitute for alcohol, also prohibited by the
              Qurʾān. Despite the threat of severe penalties, coffee drinking
              spread rapidly among Arabs and their neighbours and even gave rise
              to a new social and cultural entity, the coffeehouse. Coffee was
              introduced into one European country after another throughout the
              16th and 17th centuries. Many accounts are recorded of its
              prohibition or approval as a religious, political, and medical
              potion. By the end of the 17th century, coffeehouses were
              flourishing across Britain, the British colonies in America, and
              continental Europe.
            </p>
            <p className="uppercase py-16 text-xl font-bold tracking-tight text-gray-900 text-center">
              THE PROCCESS
            </p>
            <div className="flex flex-col lg:flex-row lg:gap-10">
              <div className="lg:w-1/2">
                <p className="py-3">
                  The ripened fruits of the coffee plant are known as coffee
                  cherries, and each cherry generally contains two coffee seeds
                  (“beans”) positioned flat against one another. About 5 percent
                  of the cherries contain only one seed; called peaberries,
                  those single seeds are smaller and denser and produce, in the
                  opinion of some, a sweeter, more flavourful coffee.
                </p>
                <p className="py-3">
                  The cherries are processed by disengaging the coffee seeds
                  from their coverings and from the pulp and by drying the
                  seeds; all beans must be removed from their fruit and dried
                  before roasting. Three techniques are used for processing the
                  coffee: the dry, or “natural,” process, the wet (and washed)
                  process, and a hybrid process called the semi-washed, or
                  “pulped natural,” method. The coffee resulting from those
                  processes is called green coffee, which is then ready for
                  roasting. See also coffee production.
                </p>
              </div>
              <div className="my-3 lg:w-1/2 lg:h-100 rounded-xl border ">
                <img
                  src={AboutImg2}
                  className=" h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
