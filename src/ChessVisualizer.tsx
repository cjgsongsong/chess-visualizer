import { createRoot } from 'react-dom/client';
import Board from './components/Board';
import './ChessVisualizer.module.css';

createRoot(document.getElementById('root')!).render(<Board />);
