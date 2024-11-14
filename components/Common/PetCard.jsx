'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PetCard = ({ data }) => {
  return (
    <div className="health-shadow rounded-lg border">
      <div className="p-4 description !font-semibold hover:shadow-xl">
        <Image
          className="w-full max-w-[284px] max-h-[300px] rounded-t-lg"
          src={data.image}
          width={284}
          height={300}
          alt="pet Image"
        />
        <Link href={`/adoption/${data._id}`}>
          <h3 className="heading2 mt-3 lg:mt-4">{data.Name}</h3>
          <div className="mt-3 flex items-center justify-between">
            <p>{data.Category}</p>
            <p>{data.Gender}</p>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p>{data.Pet}</p>
            <p>{data.Size}</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <p>{data.Location}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PetCard;
