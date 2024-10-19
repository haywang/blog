export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://twitter.com" target="_blank">
              Twitter
            </a>
            <a href="https://facebook.com" target="_blank">
              Facebook
            </a>
            <a href="https://linkedin.com" target="_blank">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    )
}