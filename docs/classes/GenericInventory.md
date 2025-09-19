[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GenericInventory

# Class: GenericInventory

Describes the parameters that are present in a generic inventory payload, which is an abstraction over every inventory item that consists of the common parameters

**`Generated`**

from message Scailo.GenericInventory

## Hierarchy

- `Message`\<[`GenericInventory`](GenericInventory.md)\>

  ↳ **`GenericInventory`**

## Table of contents

### Constructors

- [constructor](GenericInventory.md#constructor)

### Properties

- [code](GenericInventory.md#code)
- [consumedOrRejectedAt](GenericInventory.md#consumedorrejectedat)
- [description](GenericInventory.md#description)
- [discardedAt](GenericInventory.md#discardedat)
- [entityUuid](GenericInventory.md#entityuuid)
- [familyId](GenericInventory.md#familyid)
- [hash](GenericInventory.md#hash)
- [internalItemCode](GenericInventory.md#internalitemcode)
- [isQcReportPublic](GenericInventory.md#isqcreportpublic)
- [locationId](GenericInventory.md#locationid)
- [metadata](GenericInventory.md#metadata)
- [parentRefId](GenericInventory.md#parentrefid)
- [quantity](GenericInventory.md#quantity)
- [quantityRemaining](GenericInventory.md#quantityremaining)
- [refFrom](GenericInventory.md#reffrom)
- [refId](GenericInventory.md#refid)
- [remainingDimensions](GenericInventory.md#remainingdimensions)
- [returnedOrScrappedAt](GenericInventory.md#returnedorscrappedat)
- [reworkEndAt](GenericInventory.md#reworkendat)
- [reworkStartAt](GenericInventory.md#reworkstartat)
- [secondaryQuantity](GenericInventory.md#secondaryquantity)
- [secondaryUomId](GenericInventory.md#secondaryuomid)
- [shelfLifeTimestamp](GenericInventory.md#shelflifetimestamp)
- [shortUrl](GenericInventory.md#shorturl)
- [status](GenericInventory.md#status)
- [storageId](GenericInventory.md#storageid)
- [storeId](GenericInventory.md#storeid)
- [storeIntakeAt](GenericInventory.md#storeintakeat)
- [vaultFolderId](GenericInventory.md#vaultfolderid)
- [warrantyTimestamp](GenericInventory.md#warrantytimestamp)
- [fields](GenericInventory.md#fields)
- [runtime](GenericInventory.md#runtime)
- [typeName](GenericInventory.md#typename)

### Methods

- [clone](GenericInventory.md#clone)
- [equals](GenericInventory.md#equals)
- [fromBinary](GenericInventory.md#frombinary)
- [fromJson](GenericInventory.md#fromjson)
- [fromJsonString](GenericInventory.md#fromjsonstring)
- [getType](GenericInventory.md#gettype)
- [toBinary](GenericInventory.md#tobinary)
- [toJSON](GenericInventory.md#tojson)
- [toJson](GenericInventory.md#tojson-1)
- [toJsonString](GenericInventory.md#tojsonstring)
- [equals](GenericInventory.md#equals-1)
- [fromBinary](GenericInventory.md#frombinary-1)
- [fromJson](GenericInventory.md#fromjson-1)
- [fromJsonString](GenericInventory.md#fromjsonstring-1)

## Constructors

### constructor

• **new GenericInventory**(`data?`): [`GenericInventory`](GenericInventory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GenericInventory`](GenericInventory.md)\> |

#### Returns

[`GenericInventory`](GenericInventory.md)

#### Overrides

Message\&lt;GenericInventory\&gt;.constructor

#### Defined in

[src/inventory.scailo_pb.ts:442](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L442)

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the inventory item

**`Generated`**

from field: string code = 34;

#### Defined in

[src/inventory.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L335)

___

### consumedOrRejectedAt

• **consumedOrRejectedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was either consumed or rejected

**`Generated`**

from field: uint64 consumed_or_rejected_at = 11;

#### Defined in

[src/inventory.scailo_pb.ts:265](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L265)

___

### description

• **description**: `string` = `""`

The description of the inventory item

**`Generated`**

from field: string description = 60;

#### Defined in

[src/inventory.scailo_pb.ts:433](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L433)

___

### discardedAt

• **discardedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was discarded

**`Generated`**

from field: uint64 discarded_at = 15;

#### Defined in

[src/inventory.scailo_pb.ts:293](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L293)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/inventory.scailo_pb.ts:237](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L237)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/inventory.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L328)

___

### hash

• **hash**: `string` = `""`

The computed hash of the inventory item

**`Generated`**

from field: string hash = 36;

#### Defined in

[src/inventory.scailo_pb.ts:349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L349)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/inventory.scailo_pb.ts:342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L342)

___

### isQcReportPublic

• **isQcReportPublic**: `boolean` = `false`

Stores if the associated QC report should be public

**`Generated`**

from field: bool is_qc_report_public = 52;

#### Defined in

[src/inventory.scailo_pb.ts:412](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L412)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the item needs to be stored

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/inventory.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L419)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this inventory item

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/inventory.scailo_pb.ts:244](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L244)

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item (if applicable)

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

[src/inventory.scailo_pb.ts:307](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L307)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: uint64 quantity = 37;

#### Defined in

[src/inventory.scailo_pb.ts:356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L356)

___

### quantityRemaining

• **quantityRemaining**: `bigint` = `protoInt64.zero`

Stores the remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining = 38;

#### Defined in

[src/inventory.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L363)

___

### refFrom

• **refFrom**: [`GENERIC_INVENTORY_REF_FROM`](../enums/GENERIC_INVENTORY_REF_FROM.md) = `GENERIC_INVENTORY_REF_FROM.GENERIC_INVENTORY_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.GENERIC_INVENTORY_REF_FROM ref_from = 31;

#### Defined in

[src/inventory.scailo_pb.ts:314](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L314)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/inventory.scailo_pb.ts:321](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L321)

___

### remainingDimensions

• **remainingDimensions**: `string` = `""`

Stores any applicable remaining dimensions as a string

**`Generated`**

from field: string remaining_dimensions = 55;

#### Defined in

[src/inventory.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L426)

___

### returnedOrScrappedAt

• **returnedOrScrappedAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was either returned or scrapped

**`Generated`**

from field: uint64 returned_or_scrapped_at = 14;

#### Defined in

[src/inventory.scailo_pb.ts:286](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L286)

___

### reworkEndAt

• **reworkEndAt**: `bigint` = `protoInt64.zero`

The timestamp of when the rework process ended

**`Generated`**

from field: uint64 rework_end_at = 13;

#### Defined in

[src/inventory.scailo_pb.ts:279](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L279)

___

### reworkStartAt

• **reworkStartAt**: `bigint` = `protoInt64.zero`

The timestamp of when the rework process began

**`Generated`**

from field: uint64 rework_start_at = 12;

#### Defined in

[src/inventory.scailo_pb.ts:272](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L272)

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of inventory item

**`Generated`**

from field: uint64 secondary_quantity = 40;

#### Defined in

[src/inventory.scailo_pb.ts:377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L377)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of inventory item

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/inventory.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L370)

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 41;

#### Defined in

[src/inventory.scailo_pb.ts:384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L384)

___

### shortUrl

• **shortUrl**: `string` = `""`

The short URL of the item

**`Generated`**

from field: string short_url = 70;

#### Defined in

[src/inventory.scailo_pb.ts:440](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L440)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this inventory item

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 4;

#### Defined in

[src/inventory.scailo_pb.ts:251](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L251)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the inventory item is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/inventory.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L405)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the inventory item is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/inventory.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L398)

___

### storeIntakeAt

• **storeIntakeAt**: `bigint` = `protoInt64.zero`

The timestamp of when the item was admitted into store

**`Generated`**

from field: uint64 store_intake_at = 10;

#### Defined in

[src/inventory.scailo_pb.ts:258](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L258)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

[src/inventory.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L300)

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 42;

#### Defined in

[src/inventory.scailo_pb.ts:391](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L391)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inventory.scailo_pb.ts:449](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L449)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inventory.scailo_pb.ts:447](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L447)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GenericInventory"``

#### Defined in

[src/inventory.scailo_pb.ts:448](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L448)

## Methods

### clone

▸ **clone**(): [`GenericInventory`](GenericInventory.md)

Create a deep copy.

#### Returns

[`GenericInventory`](GenericInventory.md)

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
| `other` | `undefined` \| ``null`` \| [`GenericInventory`](GenericInventory.md) \| `PlainMessage`\<[`GenericInventory`](GenericInventory.md)\> |

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

▸ **getType**(): `MessageType`\<[`GenericInventory`](GenericInventory.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GenericInventory`](GenericInventory.md)\>

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
| `a` | `undefined` \| [`GenericInventory`](GenericInventory.md) \| `PlainMessage`\<[`GenericInventory`](GenericInventory.md)\> |
| `b` | `undefined` \| [`GenericInventory`](GenericInventory.md) \| `PlainMessage`\<[`GenericInventory`](GenericInventory.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inventory.scailo_pb.ts:494](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L494)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GenericInventory`](GenericInventory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GenericInventory`](GenericInventory.md)

#### Defined in

[src/inventory.scailo_pb.ts:482](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L482)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GenericInventory`](GenericInventory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GenericInventory`](GenericInventory.md)

#### Defined in

[src/inventory.scailo_pb.ts:486](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L486)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GenericInventory`](GenericInventory.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GenericInventory`](GenericInventory.md)

#### Defined in

[src/inventory.scailo_pb.ts:490](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inventory.scailo_pb.ts#L490)
