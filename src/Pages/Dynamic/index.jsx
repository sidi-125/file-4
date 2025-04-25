// DynamicTable.jsx
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Dynamic Table (Dynamic Columns)
const DynamicTable = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (!data || data.length === 0) return <Typography>No data provided.</Typography>;

  const columns = Object.keys(data[0]);

  return (
    <TableContainer component={Paper} sx={{ marginBottom: '20px' }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell key={index} sx={{ fontWeight: 'bold', fontSize: isMobile ? '12px' : '16px' }}>
                {col.toUpperCase()}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex} sx={{ fontSize: isMobile ? '12px' : '16px' }}>
                  {row[col]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
