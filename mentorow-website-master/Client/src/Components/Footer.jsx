import { footerLinks, socialMedia } from "../datas";
import { Link } from "react-router-dom";
import '../assets/css/terms.css';

const Footer = () => {
  return (
    <section className="flex justify-center items-center px-4 sm:pt-16 py-6 flex-col  bg-black">
      <div className="flex justify-center items-start md:flex-row flex-col w-full   border-t-2 border-[#7962FA] pt-5">
        <div className=" w-full flex flex-row justify-between md:justify-around flex-wrap md:mt-0 mt-5 max-w-[1166px]">
          {footerLinks.map((footerLink, index) => (
            <div
              key={index}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-sen bg-gradient-to-r from-[#42b774] via-[#4598d2] to-[#de74ae]  text-transparent bg-clip-text  font-medium text-xl text-[#9A7BFF] m-0 ">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-6">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="font-sen font-normal text-[12px] leading-[12px] text-white cursor-pointer mb-4 "
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row md:justify-end w-full mb-4  ">
        {socialMedia.map((social, index) => (
          <img
            src={social.icon}
            alt={social.id}
            key={index}
            className="h-6 w-6 sm:w-8 sm:h-8 object-contain cursor-pointer last:mr-0 mr-2 hover:opacity-30"
          />
        ))}
      </div>
      <div className="flex flex-col  mb-4 md:mb-0">
        <p className="font-sen font-normal text-white text-[15px] leading-[16px] sm:mb-0 mb-4">
          Backed by
        </p>
        <div className="flex justify-center ">
          <img
            src="src/assets/Logo.png"
            alt="hoobank"
            className="w-[250px] h-[72px] mb-2 object-contain"
          />
        </div>

        <p className="font-sen font-normal text-white text-[15px] leading-[16px]  text-center">
          Mentor Academy for Design Entreprenuership Innovation and Technology
        </p>
        
      </div>
      <p className=" text-white text-center opacity-50 text-sm h-[50px] flex items-end">
        Copyright @ {new Date().getFullYear()} Mentorow.All right reserved : <Link to='/terms-conditions'><p className="text-primary"> terms and conditions</p></Link>
      </p>
    </section>
  );
};

export default Footer;