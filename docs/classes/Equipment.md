[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Equipment

# Class: Equipment

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Equipment

## Hierarchy

- `Message`\<[`Equipment`](Equipment.md)\>

  ↳ **`Equipment`**

## Table of contents

### Constructors

- [constructor](Equipment.md#constructor)

### Properties

- [code](Equipment.md#code)
- [consumedOrRejectedAt](Equipment.md#consumedorrejectedat)
- [description](Equipment.md#description)
- [discardedAt](Equipment.md#discardedat)
- [entityUuid](Equipment.md#entityuuid)
- [familyId](Equipment.md#familyid)
- [formData](Equipment.md#formdata)
- [hash](Equipment.md#hash)
- [internalItemCode](Equipment.md#internalitemcode)
- [isQcReportPublic](Equipment.md#isqcreportpublic)
- [locationId](Equipment.md#locationid)
- [logs](Equipment.md#logs)
- [metadata](Equipment.md#metadata)
- [parentRefId](Equipment.md#parentrefid)
- [quantity](Equipment.md#quantity)
- [quantityRemaining](Equipment.md#quantityremaining)
- [refFrom](Equipment.md#reffrom)
- [refId](Equipment.md#refid)
- [remainingDimensions](Equipment.md#remainingdimensions)
- [returnedOrScrappedAt](Equipment.md#returnedorscrappedat)
- [reworkEndAt](Equipment.md#reworkendat)
- [reworkStartAt](Equipment.md#reworkstartat)
- [secondaryQuantity](Equipment.md#secondaryquantity)
- [secondaryUomId](Equipment.md#secondaryuomid)
- [shelfLifeTimestamp](Equipment.md#shelflifetimestamp)
- [shortUrl](Equipment.md#shorturl)
- [status](Equipment.md#status)
- [storageId](Equipment.md#storageid)
- [storeId](Equipment.md#storeid)
- [storeIntakeAt](Equipment.md#storeintakeat)
- [vaultFolderId](Equipment.md#vaultfolderid)
- [warrantyTimestamp](Equipment.md#warrantytimestamp)
- [fields](Equipment.md#fields)
- [runtime](Equipment.md#runtime)
- [typeName](Equipment.md#typename)

### Methods

- [clone](Equipment.md#clone)
- [equals](Equipment.md#equals)
- [fromBinary](Equipment.md#frombinary)
- [fromJson](Equipment.md#fromjson)
- [fromJsonString](Equipment.md#fromjsonstring)
- [getType](Equipment.md#gettype)
- [toBinary](Equipment.md#tobinary)
- [toJSON](Equipment.md#tojson)
- [toJson](Equipment.md#tojson-1)
- [toJsonString](Equipment.md#tojsonstring)
- [equals](Equipment.md#equals-1)
- [fromBinary](Equipment.md#frombinary-1)
- [fromJson](Equipment.md#fromjson-1)
- [fromJsonString](Equipment.md#fromjsonstring-1)

## Constructors

### constructor

• **new Equipment**(`data?`): [`Equipment`](Equipment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Equipment`](Equipment.md)\> |

#### Returns

[`Equipment`](Equipment.md)

#### Overrides

Message\&lt;Equipment\&gt;.constructor

#### Defined in

[src/equipments.scailo_pb.ts:691](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L691)

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the equipment

**`Generated`**

from field: string code = 34;

#### Defined in

[src/equipments.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L577)

___

### consumedOrRejectedAt

• **consumedOrRejectedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was either consumed or rejected

**`Generated`**

from field: uint64 consumed_or_rejected_at = 11;

#### Defined in

[src/equipments.scailo_pb.ts:507](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L507)

___

### description

• **description**: `string` = `""`

The description of the equipment

**`Generated`**

from field: string description = 60;

#### Defined in

[src/equipments.scailo_pb.ts:675](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L675)

___

### discardedAt

• **discardedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was discarded

**`Generated`**

from field: uint64 discarded_at = 15;

#### Defined in

[src/equipments.scailo_pb.ts:535](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L535)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/equipments.scailo_pb.ts:472](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L472)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/equipments.scailo_pb.ts:570](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L570)

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 80;

#### Defined in

[src/equipments.scailo_pb.ts:689](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L689)

___

### hash

• **hash**: `string` = `""`

The computed hash of the equipment

**`Generated`**

from field: string hash = 36;

#### Defined in

[src/equipments.scailo_pb.ts:591](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L591)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/equipments.scailo_pb.ts:584](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L584)

___

### isQcReportPublic

• **isQcReportPublic**: `boolean` = `false`

Stores if the associated QC report should be public

**`Generated`**

from field: bool is_qc_report_public = 52;

#### Defined in

[src/equipments.scailo_pb.ts:654](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L654)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the item needs to be stored

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/equipments.scailo_pb.ts:661](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L661)

___

### logs

• **logs**: [`LogbookLogInventoryLC`](LogbookLogInventoryLC.md)[] = `[]`

Stores the logs of every operation performed on this equipment

**`Generated`**

from field: repeated Scailo.LogbookLogInventoryLC logs = 5;

#### Defined in

[src/equipments.scailo_pb.ts:493](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L493)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this equipment

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/equipments.scailo_pb.ts:479](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L479)

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item (if applicable)

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

[src/equipments.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L549)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: uint64 quantity = 37;

#### Defined in

[src/equipments.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L598)

___

### quantityRemaining

• **quantityRemaining**: `bigint` = `protoInt64.zero`

Stores the remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining = 38;

#### Defined in

[src/equipments.scailo_pb.ts:605](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L605)

___

### refFrom

• **refFrom**: [`EQUIPMENT_REF_FROM`](../enums/EQUIPMENT_REF_FROM.md) = `EQUIPMENT_REF_FROM.EQUIPMENT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.EQUIPMENT_REF_FROM ref_from = 31;

#### Defined in

[src/equipments.scailo_pb.ts:556](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L556)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/equipments.scailo_pb.ts:563](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L563)

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

Stores any applicable remaining dimensions as a string

**`Generated`**

from field: string remaining_dimensions = 55;

#### Defined in

[src/equipments.scailo_pb.ts:668](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L668)

___

### returnedOrScrappedAt

• **returnedOrScrappedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was either returned or scrapped

**`Generated`**

from field: uint64 returned_or_scrapped_at = 14;

#### Defined in

[src/equipments.scailo_pb.ts:528](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L528)

___

### reworkEndAt

• **reworkEndAt**: `bigint` = `protoInt64.zero`

The timestamp of when the rework process ended

**`Generated`**

from field: uint64 rework_end_at = 13;

#### Defined in

[src/equipments.scailo_pb.ts:521](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L521)

___

### reworkStartAt

• **reworkStartAt**: `bigint` = `protoInt64.zero`

The timestamp of when the rework process began

**`Generated`**

from field: uint64 rework_start_at = 12;

#### Defined in

[src/equipments.scailo_pb.ts:514](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L514)

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of equipment

**`Generated`**

from field: uint64 secondary_quantity = 40;

#### Defined in

[src/equipments.scailo_pb.ts:619](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L619)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of equipment

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/equipments.scailo_pb.ts:612](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L612)

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 41;

#### Defined in

[src/equipments.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L626)

___

### shortUrl

• **shortUrl**: `string` = `""`

The short URL of the item

**`Generated`**

from field: string short_url = 70;

#### Defined in

[src/equipments.scailo_pb.ts:682](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L682)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this equipment

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 4;

#### Defined in

[src/equipments.scailo_pb.ts:486](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L486)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the equipment is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/equipments.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L647)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the equipment is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/equipments.scailo_pb.ts:640](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L640)

___

### storeIntakeAt

• **storeIntakeAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was admitted into store

**`Generated`**

from field: uint64 store_intake_at = 10;

#### Defined in

[src/equipments.scailo_pb.ts:500](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L500)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

[src/equipments.scailo_pb.ts:542](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L542)

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 42;

#### Defined in

[src/equipments.scailo_pb.ts:633](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L633)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equipments.scailo_pb.ts:698](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L698)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equipments.scailo_pb.ts:696](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L696)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Equipment"``

#### Defined in

[src/equipments.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L697)

## Methods

### clone

▸ **clone**(): [`Equipment`](Equipment.md)

Create a deep copy.

#### Returns

[`Equipment`](Equipment.md)

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
| `other` | `undefined` \| ``null`` \| [`Equipment`](Equipment.md) \| `PlainMessage`\<[`Equipment`](Equipment.md)\> |

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

▸ **getType**(): `MessageType`\<[`Equipment`](Equipment.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Equipment`](Equipment.md)\>

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
| `a` | `undefined` \| [`Equipment`](Equipment.md) \| `PlainMessage`\<[`Equipment`](Equipment.md)\> |
| `b` | `undefined` \| [`Equipment`](Equipment.md) \| `PlainMessage`\<[`Equipment`](Equipment.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equipments.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L745)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Equipment`](Equipment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Equipment`](Equipment.md)

#### Defined in

[src/equipments.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L733)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Equipment`](Equipment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Equipment`](Equipment.md)

#### Defined in

[src/equipments.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L737)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Equipment`](Equipment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Equipment`](Equipment.md)

#### Defined in

[src/equipments.scailo_pb.ts:741](https://github.com/scailo/ts-sdk/blob/f507fdd53a88c7cbc8d9533380bdfc87c4dacc8a/src/equipments.scailo_pb.ts#L741)
