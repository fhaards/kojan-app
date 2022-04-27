import React, { Fragment} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, FilterIcon } from "@heroicons/react/solid";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

// const [small, setSmall] = useState(false);
// useEffect(() => {
//   if (typeof window !== "undefined") {
//     window.addEventListener("scroll", () =>
//       setSmall(window.pageYOffset > 50)
//     );
//   }
// }, []);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      setMobileFiltersOpen: false,
      small: false,
    };
  }

  componentDidMount() {
    var url3 = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    axios.get(url3).then((res) => {
      const items = res.data.meals;
      this.setState({ items, DataisLoaded: true });
      console.log(items);
    });
  }

  render() {
    const { DataisLoaded, items, setMobileFiltersOpen, small } = this.state;
    // const { setMobileFiltersOpen } = useState(false);
    if (!DataisLoaded)
      return (
        <div className="container mx-auto max-w-6xl text-center items-center py-32">
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <section className="body-font">
        <div className="section-menu-hero lg:text-center py-32 flex items-center justify-center">
          <h2 className="title-font section-title text-center text-5xl text-gray-50 font-semibold tracking-wide uppercase">
            Our Food
          </h2>
        </div>

        <div className="mx-auto max-w-6xl px-5 lg:px-0 py-24 relative">
          <div
            className={`mb-12 z-10 flex items-baseline justify-between pb-6 border-b border-gray-200 ${
              small ? "bg-slate-500" : "bg-yellow-500"
            }`}
          >
            <h1 className="text-lg font-medium tracking-tight text-gray-900">
              Food List
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FilterIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {items.slice(0, 20).map((item) => (
              <Link
                to={`/food/detail/${item.idMeal}`}
                className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={item.strMealThumb}
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h2 className="md:block hidden tracking-widest text-xs font-medium text-gray-400 mb-1 mt-2 uppercase">
                  {item.strCategory}
                </h2>
                <h1 className="title-font sm:text-sm lg:text-lg text-xs font-bold text-slate-700 mb-3 uppercase font-bold tracking-wide">
                  {item.strMeal}
                </h1>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
