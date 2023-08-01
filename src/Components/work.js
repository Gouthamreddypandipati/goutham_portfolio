import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const steps = [
  {
    label: 'Software Developer',
    date: 'Sep 2022 - July 2023',
    companyName: 'Quantiphi',
    description: [
      'Successfully achieved a significant 40 - 50% decrease in response time and enhanced application scalability by optimizing API endpoints through the implementation of pagination and caching techniques',
      'Achieved a 50% reduction in maintenance costs and improved code maintainability by migrating a legacy application to Reactjs.',
      'Developed and deployed RESTful APIs for Aflac insurance client, facilitating seamless data exchange and enhancing operational efficiency',
      'clients: Aflac, Nvidia',
      'Tech stacks:Django REST framework, Reactjs'
    ]
  },
  {
    label: 'Data Engineering Intern',
    date: 'Mar 2022 - August 2022',
    companyName: 'Tiger Analytics',
    description: [
      ' Achieved up to 40% faster data retrieval through strategic query design and indexing',
      'Designed and implemented data pipelines using Azure Data Factory, enabling seamless data integration and automated workflows for efficient data processing',
      ' Integrated data pipelines with Power BI and Tableau, allowing for the creation of impactful visualizations and powerful insights for Clients Business Growth',
      'clients: American Express',
      'Technologies Used: Python , SQL, ETL, Azure, Pandas, PowerBI, Tableau'
    ]
  }
];

const StyledBulletPoint = styled(Typography)`
  font-size: 1.5em;
  color: rgb(94, 234, 212);
  margin-right: 0.5em;
`;

const StyledStep = styled(Step)`
  .MuiStepLabel-root.MuiStepLabel-active {
    cursor: pointer;
    color: rgb(204, 214, 246) !important;
  }

  .MuiStepIcon-root {
    color: teal !important;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 100px;
  color: rgb(94, 234, 212) !important;
  background-color: rgba(45, 212, 191, 0.1) !important;
`;

const Work = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: '0 auto', paddingLeft: { xs: '10px', md: '65px' } }}>
      <Typography
        component="span"
        variant="span"
        sx={{
          color: 'rgb(94, 234, 212)',
          fontFamily: 'SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace',
          fontSize: { xs: '20px', md: '25px' },
          paddingRight: '1px',
          fontWeight: '600',
          paddingLeft: '10px'
        }}
      >
        02.
      </Typography>
      <Typography
        component="span"
        variant="span"
        sx={{
          color: 'rgb(204, 214, 246)',
          fontFamily: 'SF Mono,Fira Code,Fira Mono,Roboto Mono,monospace',
          fontSize: { xs: '24px', md: '30px' },
          fontWeight: '600',
          paddingLeft: '10px'
        }}
      >
        Experience
      </Typography>
      <br />
      <br />
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <StyledStep key={step.label}>
            <StepLabel onClick={() => handleStepClick(index)}>
              <Typography
                sx={{
                  color: 'rgb(204, 214, 246)',
                  fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                  fontSize: { xs: '18px', md: '20px' }
                }}
              >
                <strong>{step.label}</strong> @{' '}
                <span
                  style={{
                    color: 'rgb(94, 234, 212)',
                    fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace'
                  }}
                >
                  {step.companyName}
                </span>
              </Typography>
              <Typography
                sx={{
                  color: 'rgb(136, 146, 176)',
                  fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                  fontSize: { xs: '16px', md: '18px' }
                }}
              >
                {step.date}
              </Typography>
            </StepLabel>
            <StepContent style={{ display: activeStep === index ? 'block' : 'none' }}>
              <Typography
                sx={{
                  mb: 2,
                  width: '100%',
                  maxWidth: '500px',
                  color: 'rgb(136, 146, 176)',
                  fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                  fontSize: { xs: '16px', md: '18px' }
                }}
              >
                {step.description.map((point, i) => (
                  <Typography
                    key={i}
                    component="div"
                    sx={{
                      mt: 2,
                      color: 'rgb(136, 146, 176)',
                      fontFamily: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
                      fontSize: { xs: '14px', md: '16px' }
                    }}
                  >
                    <StyledBulletPoint component="span">▹</StyledBulletPoint>
                    {point}
                  </Typography>
                ))}
              </Typography>
              {activeStep < steps.length - 1 && (
                <StyledButton variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                  Next
                </StyledButton>
              )}
              {activeStep > 0 && (
                <Button
                  onClick={handleBack}
                  sx={{
                    mt: 1,
                    mr: 1,
                    borderRadius: '100px',
                    color: 'rgb(94, 234, 212)',
                    backgroundColor: 'rgba(45, 212, 191, 0.1)'
                  }}
                >
                  Back
                </Button>
              )}
            </StepContent>
          </StyledStep>
        ))}
      </Stepper>
      <br></br>
      <br></br>
    </Box>
  );
};

export default Work;
