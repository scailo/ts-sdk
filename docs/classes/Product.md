[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Product

# Class: Product

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Product

## Hierarchy

- `Message`\<[`Product`](Product.md)\>

  ↳ **`Product`**

## Table of contents

### Constructors

- [constructor](Product.md#constructor)

### Properties

- [code](Product.md#code)
- [consumedOrRejectedAt](Product.md#consumedorrejectedat)
- [description](Product.md#description)
- [discardedAt](Product.md#discardedat)
- [entityUuid](Product.md#entityuuid)
- [familyId](Product.md#familyid)
- [hash](Product.md#hash)
- [internalItemCode](Product.md#internalitemcode)
- [isQcReportPublic](Product.md#isqcreportpublic)
- [locationId](Product.md#locationid)
- [logs](Product.md#logs)
- [metadata](Product.md#metadata)
- [parentRefId](Product.md#parentrefid)
- [quantity](Product.md#quantity)
- [quantityRemaining](Product.md#quantityremaining)
- [refFrom](Product.md#reffrom)
- [refId](Product.md#refid)
- [remainingDimensions](Product.md#remainingdimensions)
- [returnedOrScrappedAt](Product.md#returnedorscrappedat)
- [reworkEndAt](Product.md#reworkendat)
- [reworkStartAt](Product.md#reworkstartat)
- [secondaryQuantity](Product.md#secondaryquantity)
- [secondaryUomId](Product.md#secondaryuomid)
- [shelfLifeTimestamp](Product.md#shelflifetimestamp)
- [shortUrl](Product.md#shorturl)
- [status](Product.md#status)
- [storageId](Product.md#storageid)
- [storeId](Product.md#storeid)
- [storeIntakeAt](Product.md#storeintakeat)
- [vaultFolderId](Product.md#vaultfolderid)
- [warrantyTimestamp](Product.md#warrantytimestamp)
- [fields](Product.md#fields)
- [runtime](Product.md#runtime)
- [typeName](Product.md#typename)

### Methods

- [clone](Product.md#clone)
- [equals](Product.md#equals)
- [fromBinary](Product.md#frombinary)
- [fromJson](Product.md#fromjson)
- [fromJsonString](Product.md#fromjsonstring)
- [getType](Product.md#gettype)
- [toBinary](Product.md#tobinary)
- [toJSON](Product.md#tojson)
- [toJson](Product.md#tojson-1)
- [toJsonString](Product.md#tojsonstring)
- [equals](Product.md#equals-1)
- [fromBinary](Product.md#frombinary-1)
- [fromJson](Product.md#fromjson-1)
- [fromJsonString](Product.md#fromjsonstring-1)

## Constructors

### constructor

• **new Product**(`data?`): [`Product`](Product.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Product`](Product.md)\> |

#### Returns

[`Product`](Product.md)

#### Overrides

Message\&lt;Product\&gt;.constructor

#### Defined in

src/products.scailo_pb.ts:659

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the product

**`Generated`**

from field: string code = 34;

#### Defined in

src/products.scailo_pb.ts:552

___

### consumedOrRejectedAt

• **consumedOrRejectedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was either consumed or rejected

**`Generated`**

from field: uint64 consumed_or_rejected_at = 11;

#### Defined in

src/products.scailo_pb.ts:482

___

### description

• **description**: `string` = `""`

The description of the product

**`Generated`**

from field: string description = 60;

#### Defined in

src/products.scailo_pb.ts:650

___

### discardedAt

• **discardedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was discarded

**`Generated`**

from field: uint64 discarded_at = 15;

#### Defined in

src/products.scailo_pb.ts:510

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/products.scailo_pb.ts:447

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

src/products.scailo_pb.ts:545

___

### hash

• **hash**: `string` = `""`

The computed hash of the product

**`Generated`**

from field: string hash = 36;

#### Defined in

src/products.scailo_pb.ts:566

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

src/products.scailo_pb.ts:559

___

### isQcReportPublic

• **isQcReportPublic**: `boolean` = `false`

Stores if the associated QC report should be public

**`Generated`**

from field: bool is_qc_report_public = 52;

#### Defined in

src/products.scailo_pb.ts:629

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the item needs to be stored

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

src/products.scailo_pb.ts:636

___

### logs

• **logs**: [`LogbookLogInventoryLC`](LogbookLogInventoryLC.md)[] = `[]`

Stores the logs of every operation performed on this product

**`Generated`**

from field: repeated Scailo.LogbookLogInventoryLC logs = 5;

#### Defined in

src/products.scailo_pb.ts:468

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this product

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/products.scailo_pb.ts:454

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item (if applicable)

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

src/products.scailo_pb.ts:524

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: uint64 quantity = 37;

#### Defined in

src/products.scailo_pb.ts:573

___

### quantityRemaining

• **quantityRemaining**: `bigint` = `protoInt64.zero`

Stores the remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining = 38;

#### Defined in

src/products.scailo_pb.ts:580

___

### refFrom

• **refFrom**: [`PRODUCT_REF_FROM`](../enums/PRODUCT_REF_FROM.md) = `PRODUCT_REF_FROM.PRODUCT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.PRODUCT_REF_FROM ref_from = 31;

#### Defined in

src/products.scailo_pb.ts:531

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

src/products.scailo_pb.ts:538

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

Stores any applicable remaining dimensions as a string

**`Generated`**

from field: string remaining_dimensions = 55;

#### Defined in

src/products.scailo_pb.ts:643

___

### returnedOrScrappedAt

• **returnedOrScrappedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was either returned or scrapped

**`Generated`**

from field: uint64 returned_or_scrapped_at = 14;

#### Defined in

src/products.scailo_pb.ts:503

___

### reworkEndAt

• **reworkEndAt**: `bigint` = `protoInt64.zero`

The timestamp of when the rework process ended

**`Generated`**

from field: uint64 rework_end_at = 13;

#### Defined in

src/products.scailo_pb.ts:496

___

### reworkStartAt

• **reworkStartAt**: `bigint` = `protoInt64.zero`

The timestamp of when the rework process began

**`Generated`**

from field: uint64 rework_start_at = 12;

#### Defined in

src/products.scailo_pb.ts:489

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of product

**`Generated`**

from field: uint64 secondary_quantity = 40;

#### Defined in

src/products.scailo_pb.ts:594

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of product

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

src/products.scailo_pb.ts:587

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 41;

#### Defined in

src/products.scailo_pb.ts:601

___

### shortUrl

• **shortUrl**: `string` = `""`

The short URL of the item

**`Generated`**

from field: string short_url = 70;

#### Defined in

src/products.scailo_pb.ts:657

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this product

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 4;

#### Defined in

src/products.scailo_pb.ts:461

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the product is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

src/products.scailo_pb.ts:622

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the product is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

src/products.scailo_pb.ts:615

___

### storeIntakeAt

• **storeIntakeAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was admitted into store

**`Generated`**

from field: uint64 store_intake_at = 10;

#### Defined in

src/products.scailo_pb.ts:475

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

src/products.scailo_pb.ts:517

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 42;

#### Defined in

src/products.scailo_pb.ts:608

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/products.scailo_pb.ts:666

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/products.scailo_pb.ts:664

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Product"``

#### Defined in

src/products.scailo_pb.ts:665

## Methods

### clone

▸ **clone**(): [`Product`](Product.md)

Create a deep copy.

#### Returns

[`Product`](Product.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`Product`](Product.md) \| `PlainMessage`\<[`Product`](Product.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`Product`](Product.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Product`](Product.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`Product`](Product.md) \| `PlainMessage`\<[`Product`](Product.md)\> |
| `b` | `undefined` \| [`Product`](Product.md) \| `PlainMessage`\<[`Product`](Product.md)\> |

#### Returns

`boolean`

#### Defined in

src/products.scailo_pb.ts:712

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Product`](Product.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Product`](Product.md)

#### Defined in

src/products.scailo_pb.ts:700

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Product`](Product.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Product`](Product.md)

#### Defined in

src/products.scailo_pb.ts:704

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Product`](Product.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Product`](Product.md)

#### Defined in

src/products.scailo_pb.ts:708
