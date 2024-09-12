interface Props {
  tabBtnSection: string;
  activeTab: string;
  sectionRef: React.MutableRefObject<HTMLElement | null>;
  scrollToSection: (sectionRef: React.RefObject<HTMLElement>, tabName: string) => void;
  tabBtnTitle: string;
}

export default function TabMenuBTN({
  tabBtnSection,
  activeTab,
  sectionRef,
  scrollToSection,
  tabBtnTitle,
}: Props) {
  return (
    <button
      className={`h-[74px] relative font-semibold text-lg px-[9px] lg:px-[85px] ${activeTab === tabBtnSection ? 'font-bold border-b-4 border-Primary-80' : 'text-gray-400'}`}
      onClick={() => scrollToSection(sectionRef, tabBtnSection)}
    >
      {tabBtnTitle}
    </button>
  );
}
