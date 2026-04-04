import { Heart } from "@phosphor-icons/react/dist/ssr";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>
            Digital business cards for modern professionals. Share, update and
            impress — anytime, from any phone.
          </p>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Templates</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Changelog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">GDPR</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>&copy; 2025 Cardly. All rights reserved.</span>
          <span>Built with <Heart size={14} weight="fill" /> in Romania</span>
        </div>
      </div>
    </footer>
  );
}
