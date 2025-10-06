import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const yamlPath = path.resolve('./src/data/documents.yaml');

// Leer y parsear el archivo YAML
const yamlFileContents = fs.readFileSync(yamlPath, 'utf8');
const documentsData = yaml.load(yamlFileContents);

// Procesar los datos para añadir la propiedad link
for (const key in documentsData) {
  const item = documentsData[key];
  
  if (item.link_id) {
    item.link = `https://drive.usercontent.google.com/download?id=${item.link_id}&utm_source=Portal%20de%20Transparencia`;
  } else {
    item.link = null; // Link vacío cuando link_id es null o vacío
  }
}

const stats = fs.statSync(yamlPath);
const last_update = stats.mtime.toLocaleString('es-ES', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false
});

export const documentsInfo = {
  last_update,
  documents: documentsData
};