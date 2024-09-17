[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Merchandise

# Class: Merchandise

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Merchandise

## Hierarchy

- `Message`\<[`Merchandise`](Merchandise.md)\>

  ↳ **`Merchandise`**

## Table of contents

### Constructors

- [constructor](Merchandise.md#constructor)

### Properties

- [code](Merchandise.md#code)
- [consumedOrRejectedAt](Merchandise.md#consumedorrejectedat)
- [description](Merchandise.md#description)
- [discardedAt](Merchandise.md#discardedat)
- [entityUuid](Merchandise.md#entityuuid)
- [familyId](Merchandise.md#familyid)
- [hash](Merchandise.md#hash)
- [internalItemCode](Merchandise.md#internalitemcode)
- [isQcReportPublic](Merchandise.md#isqcreportpublic)
- [locationId](Merchandise.md#locationid)
- [logs](Merchandise.md#logs)
- [metadata](Merchandise.md#metadata)
- [parentRefId](Merchandise.md#parentrefid)
- [quantity](Merchandise.md#quantity)
- [quantityRemaining](Merchandise.md#quantityremaining)
- [refFrom](Merchandise.md#reffrom)
- [refId](Merchandise.md#refid)
- [remainingDimensions](Merchandise.md#remainingdimensions)
- [returnedOrScrappedAt](Merchandise.md#returnedorscrappedat)
- [reworkEndAt](Merchandise.md#reworkendat)
- [reworkStartAt](Merchandise.md#reworkstartat)
- [secondaryQuantity](Merchandise.md#secondaryquantity)
- [secondaryUomId](Merchandise.md#secondaryuomid)
- [shelfLifeTimestamp](Merchandise.md#shelflifetimestamp)
- [shortUrl](Merchandise.md#shorturl)
- [status](Merchandise.md#status)
- [storageId](Merchandise.md#storageid)
- [storeId](Merchandise.md#storeid)
- [storeIntakeAt](Merchandise.md#storeintakeat)
- [vaultFolderId](Merchandise.md#vaultfolderid)
- [warrantyTimestamp](Merchandise.md#warrantytimestamp)
- [fields](Merchandise.md#fields)
- [runtime](Merchandise.md#runtime)
- [typeName](Merchandise.md#typename)

### Methods

- [clone](Merchandise.md#clone)
- [equals](Merchandise.md#equals)
- [fromBinary](Merchandise.md#frombinary)
- [fromJson](Merchandise.md#fromjson)
- [fromJsonString](Merchandise.md#fromjsonstring)
- [getType](Merchandise.md#gettype)
- [toBinary](Merchandise.md#tobinary)
- [toJSON](Merchandise.md#tojson)
- [toJson](Merchandise.md#tojson-1)
- [toJsonString](Merchandise.md#tojsonstring)
- [equals](Merchandise.md#equals-1)
- [fromBinary](Merchandise.md#frombinary-1)
- [fromJson](Merchandise.md#fromjson-1)
- [fromJsonString](Merchandise.md#fromjsonstring-1)

## Constructors

### constructor

• **new Merchandise**(`data?`): [`Merchandise`](Merchandise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Merchandise`](Merchandise.md)\> |

#### Returns

[`Merchandise`](Merchandise.md)

#### Overrides

Message\&lt;Merchandise\&gt;.constructor

#### Defined in

src/merchandises.scailo_pb.ts:667

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the merchandise

**`Generated`**

from field: string code = 34;

#### Defined in

src/merchandises.scailo_pb.ts:560

___

### consumedOrRejectedAt

• **consumedOrRejectedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was either consumed or rejected

**`Generated`**

from field: uint64 consumed_or_rejected_at = 11;

#### Defined in

src/merchandises.scailo_pb.ts:490

___

### description

• **description**: `string` = `""`

The description of the merchandise

**`Generated`**

from field: string description = 60;

#### Defined in

src/merchandises.scailo_pb.ts:658

___

### discardedAt

• **discardedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was discarded

**`Generated`**

from field: uint64 discarded_at = 15;

#### Defined in

src/merchandises.scailo_pb.ts:518

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/merchandises.scailo_pb.ts:455

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

src/merchandises.scailo_pb.ts:553

___

### hash

• **hash**: `string` = `""`

The computed hash of the merchandise

**`Generated`**

from field: string hash = 36;

#### Defined in

src/merchandises.scailo_pb.ts:574

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

src/merchandises.scailo_pb.ts:567

___

### isQcReportPublic

• **isQcReportPublic**: `boolean` = `false`

Stores if the associated QC report should be public

**`Generated`**

from field: bool is_qc_report_public = 52;

#### Defined in

src/merchandises.scailo_pb.ts:637

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the item needs to be stored

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

src/merchandises.scailo_pb.ts:644

___

### logs

• **logs**: [`LogbookLogInventoryLC`](LogbookLogInventoryLC.md)[] = `[]`

Stores the logs of every operation performed on this merchandise

**`Generated`**

from field: repeated Scailo.LogbookLogInventoryLC logs = 5;

#### Defined in

src/merchandises.scailo_pb.ts:476

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this merchandise

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/merchandises.scailo_pb.ts:462

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item (if applicable)

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

src/merchandises.scailo_pb.ts:532

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: uint64 quantity = 37;

#### Defined in

src/merchandises.scailo_pb.ts:581

___

### quantityRemaining

• **quantityRemaining**: `bigint` = `protoInt64.zero`

Stores the remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining = 38;

#### Defined in

src/merchandises.scailo_pb.ts:588

___

### refFrom

• **refFrom**: [`MERCHANDISE_REF_FROM`](../enums/MERCHANDISE_REF_FROM.md) = `MERCHANDISE_REF_FROM.MERCHANDISE_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.MERCHANDISE_REF_FROM ref_from = 31;

#### Defined in

src/merchandises.scailo_pb.ts:539

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

src/merchandises.scailo_pb.ts:546

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

Stores any applicable remaining dimensions as a string

**`Generated`**

from field: string remaining_dimensions = 55;

#### Defined in

src/merchandises.scailo_pb.ts:651

___

### returnedOrScrappedAt

• **returnedOrScrappedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was either returned or scrapped

**`Generated`**

from field: uint64 returned_or_scrapped_at = 14;

#### Defined in

src/merchandises.scailo_pb.ts:511

___

### reworkEndAt

• **reworkEndAt**: `bigint` = `protoInt64.zero`

The timestamp of when the rework process ended

**`Generated`**

from field: uint64 rework_end_at = 13;

#### Defined in

src/merchandises.scailo_pb.ts:504

___

### reworkStartAt

• **reworkStartAt**: `bigint` = `protoInt64.zero`

The timestamp of when the rework process began

**`Generated`**

from field: uint64 rework_start_at = 12;

#### Defined in

src/merchandises.scailo_pb.ts:497

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of merchandise

**`Generated`**

from field: uint64 secondary_quantity = 40;

#### Defined in

src/merchandises.scailo_pb.ts:602

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of merchandise

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

src/merchandises.scailo_pb.ts:595

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 41;

#### Defined in

src/merchandises.scailo_pb.ts:609

___

### shortUrl

• **shortUrl**: `string` = `""`

The short URL of the item

**`Generated`**

from field: string short_url = 70;

#### Defined in

src/merchandises.scailo_pb.ts:665

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this merchandise

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 4;

#### Defined in

src/merchandises.scailo_pb.ts:469

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the merchandise is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

src/merchandises.scailo_pb.ts:630

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the merchandise is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

src/merchandises.scailo_pb.ts:623

___

### storeIntakeAt

• **storeIntakeAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was admitted into store

**`Generated`**

from field: uint64 store_intake_at = 10;

#### Defined in

src/merchandises.scailo_pb.ts:483

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

src/merchandises.scailo_pb.ts:525

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 42;

#### Defined in

src/merchandises.scailo_pb.ts:616

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/merchandises.scailo_pb.ts:674

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/merchandises.scailo_pb.ts:672

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Merchandise"``

#### Defined in

src/merchandises.scailo_pb.ts:673

## Methods

### clone

▸ **clone**(): [`Merchandise`](Merchandise.md)

Create a deep copy.

#### Returns

[`Merchandise`](Merchandise.md)

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
| `other` | `undefined` \| ``null`` \| [`Merchandise`](Merchandise.md) \| `PlainMessage`\<[`Merchandise`](Merchandise.md)\> |

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

▸ **getType**(): `MessageType`\<[`Merchandise`](Merchandise.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Merchandise`](Merchandise.md)\>

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
| `a` | `undefined` \| [`Merchandise`](Merchandise.md) \| `PlainMessage`\<[`Merchandise`](Merchandise.md)\> |
| `b` | `undefined` \| [`Merchandise`](Merchandise.md) \| `PlainMessage`\<[`Merchandise`](Merchandise.md)\> |

#### Returns

`boolean`

#### Defined in

src/merchandises.scailo_pb.ts:720

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Merchandise`](Merchandise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Merchandise`](Merchandise.md)

#### Defined in

src/merchandises.scailo_pb.ts:708

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Merchandise`](Merchandise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Merchandise`](Merchandise.md)

#### Defined in

src/merchandises.scailo_pb.ts:712

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Merchandise`](Merchandise.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Merchandise`](Merchandise.md)

#### Defined in

src/merchandises.scailo_pb.ts:716
