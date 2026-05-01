import img1 from "@/assets/build_connection_1.png";
import img2 from "@/assets/build_connection_2.png";
import img3 from "@/assets/build_connection_3.png";

export const BuildConnection = () => {
  return (
    <div className="bg-background-gray">
      <section className="w-full py-28 px-6 max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-around">
        <div className="w-[523px] relative flex items-center justify-center min-h-[600px]">
          <div className="relative w-[382px] h-[570px]">
            <img
              src={img2}
              alt="Founder"
              className="w-full h-full object-cover"
            />
            <img
              src={img1}
              alt="Detail"
              className="absolute left-[-80px] top-[-50px] w-[166px] h-[175px] object-cover"
            />
            <img
              src={img3}
              alt="Detail"
              className="absolute right-[-65px] bottom-[-50px] w-[129px] h-[175px] object-cover"
            />
          </div>
        </div>

        <div className="w-[619px] flex flex-col gap-8">
          <h2 className="text-[32px] leading-[40px] tracking-[0.04em] text-primary font-sofia">
            Be your best self.
          </h2>

          <div className="text-neutral-300 text-[15px] leading-[23px] tracking-[0.03em] flex flex-col gap-5">
            <p>Hi! My name’s [Insert Name], and I founded [Insert] in ____.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
              felis finibus consequat.
            </p>
            <p>
              Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec
              placerat volutpat ligula, ac consectetur felis varius non. Aliquam
              a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id
              arcu congue, faucibus libero nec, placerat ligula.
            </p>
            <p>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
            </p>
            <p>
              Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
              mattis, sapien eget lobortis fringilla, eros ipsum tristique
              tellus, ac convallis urna massa at nibh.
            </p>
            <p>
              Duis non fermentum augue. Vivamus laoreet aliquam risus, sed
              euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam
              nec in sapien.
            </p>
            <p>Cras mattis varius mollis.</p>
          </div>
          <button className="bg-primary text-primary-foreground font-suisse border-none rounded text-lg font-medium cursor-pointer flex items-center justify-center gap-6 w-[356px] h-[56px]">
            <span>Customize Your Outfit</span>
          </button>
        </div>
      </section>
    </div>
  );
};
