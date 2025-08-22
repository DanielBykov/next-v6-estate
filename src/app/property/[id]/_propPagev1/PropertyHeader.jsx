import {ButtonV1} from "@/_UI/_shadcnCustom/ButtonV1";

export default function PropertyHeader() {
  return (
    <header className="bg-primary text-primary-foreground shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">PropertyHub</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-accent transition-colors">
                Buy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Rent
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Sell
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Commercial
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <ButtonV1 variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
              {/*<Search className="h-4 w-4" />*/}
            </ButtonV1>
            <ButtonV1 variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
              {/*<Heart className="h-4 w-4" />*/}
            </ButtonV1>
            <ButtonV1 variant="ghost" size="sm" className="text-primary-foreground hover:text-accent">
              {/*<Share2 className="h-4 w-4" />*/}
            </ButtonV1>
          </div>
        </div>
      </div>
    </header>
  )
}
