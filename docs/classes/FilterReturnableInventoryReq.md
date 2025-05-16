[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FilterReturnableInventoryReq

# Class: FilterReturnableInventoryReq

Describes the message that consists of parameters that are required to filter for returnable inventory

**`Generated`**

from message Scailo.FilterReturnableInventoryReq

## Hierarchy

- `Message`\<[`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)\>

  ↳ **`FilterReturnableInventoryReq`**

## Table of contents

### Constructors

- [constructor](FilterReturnableInventoryReq.md#constructor)

### Properties

- [code](FilterReturnableInventoryReq.md#code)
- [count](FilterReturnableInventoryReq.md#count)
- [creationTimestampEnd](FilterReturnableInventoryReq.md#creationtimestampend)
- [creationTimestampStart](FilterReturnableInventoryReq.md#creationtimestampstart)
- [entityUuid](FilterReturnableInventoryReq.md#entityuuid)
- [familyId](FilterReturnableInventoryReq.md#familyid)
- [hash](FilterReturnableInventoryReq.md#hash)
- [internalItemCode](FilterReturnableInventoryReq.md#internalitemcode)
- [isActive](FilterReturnableInventoryReq.md#isactive)
- [isQcReportPublic](FilterReturnableInventoryReq.md#isqcreportpublic)
- [locationId](FilterReturnableInventoryReq.md#locationid)
- [modificationTimestampEnd](FilterReturnableInventoryReq.md#modificationtimestampend)
- [modificationTimestampStart](FilterReturnableInventoryReq.md#modificationtimestampstart)
- [offset](FilterReturnableInventoryReq.md#offset)
- [quantityRemainingMax](FilterReturnableInventoryReq.md#quantityremainingmax)
- [quantityRemainingMin](FilterReturnableInventoryReq.md#quantityremainingmin)
- [secondaryUomId](FilterReturnableInventoryReq.md#secondaryuomid)
- [shelfLifeTimestampEnd](FilterReturnableInventoryReq.md#shelflifetimestampend)
- [shelfLifeTimestampStart](FilterReturnableInventoryReq.md#shelflifetimestampstart)
- [sortKey](FilterReturnableInventoryReq.md#sortkey)
- [sortOrder](FilterReturnableInventoryReq.md#sortorder)
- [warrantyTimestampEnd](FilterReturnableInventoryReq.md#warrantytimestampend)
- [warrantyTimestampStart](FilterReturnableInventoryReq.md#warrantytimestampstart)
- [fields](FilterReturnableInventoryReq.md#fields)
- [runtime](FilterReturnableInventoryReq.md#runtime)
- [typeName](FilterReturnableInventoryReq.md#typename)

### Methods

- [clone](FilterReturnableInventoryReq.md#clone)
- [equals](FilterReturnableInventoryReq.md#equals)
- [fromBinary](FilterReturnableInventoryReq.md#frombinary)
- [fromJson](FilterReturnableInventoryReq.md#fromjson)
- [fromJsonString](FilterReturnableInventoryReq.md#fromjsonstring)
- [getType](FilterReturnableInventoryReq.md#gettype)
- [toBinary](FilterReturnableInventoryReq.md#tobinary)
- [toJSON](FilterReturnableInventoryReq.md#tojson)
- [toJson](FilterReturnableInventoryReq.md#tojson-1)
- [toJsonString](FilterReturnableInventoryReq.md#tojsonstring)
- [equals](FilterReturnableInventoryReq.md#equals-1)
- [fromBinary](FilterReturnableInventoryReq.md#frombinary-1)
- [fromJson](FilterReturnableInventoryReq.md#fromjson-1)
- [fromJsonString](FilterReturnableInventoryReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FilterReturnableInventoryReq**(`data?`): [`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)\> |

#### Returns

[`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)

#### Overrides

Message\&lt;FilterReturnableInventoryReq\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:1096

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the inventory item

**`Generated`**

from field: string code = 34;

#### Defined in

src/inventory.scailo_pb.ts:1017

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/inventory.scailo_pb.ts:947

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/inventory.scailo_pb.ts:982

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/inventory.scailo_pb.ts:975

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/inventory.scailo_pb.ts:1003

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

src/inventory.scailo_pb.ts:1010

___

### hash

• **hash**: `string` = `""`

The computed hash of the inventory item

**`Generated`**

from field: string hash = 36;

#### Defined in

src/inventory.scailo_pb.ts:1031

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

src/inventory.scailo_pb.ts:1024

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/inventory.scailo_pb.ts:940

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

src/inventory.scailo_pb.ts:1087

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Filter by the location ID

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

src/inventory.scailo_pb.ts:1094

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/inventory.scailo_pb.ts:996

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/inventory.scailo_pb.ts:989

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/inventory.scailo_pb.ts:954

___

### quantityRemainingMax

• **quantityRemainingMax**: `bigint` = `protoInt64.zero`

The maximum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_max = 38;

#### Defined in

src/inventory.scailo_pb.ts:1045

___

### quantityRemainingMin

• **quantityRemainingMin**: `bigint` = `protoInt64.zero`

The minimum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_min = 37;

#### Defined in

src/inventory.scailo_pb.ts:1038

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of inventory item

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

src/inventory.scailo_pb.ts:1052

___

### shelfLifeTimestampEnd

• **shelfLifeTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_end = 41;

#### Defined in

src/inventory.scailo_pb.ts:1066

___

### shelfLifeTimestampStart

• **shelfLifeTimestampStart**: `bigint` = `protoInt64.zero`

The start range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_start = 40;

#### Defined in

src/inventory.scailo_pb.ts:1059

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

src/inventory.scailo_pb.ts:968

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/inventory.scailo_pb.ts:961

___

### warrantyTimestampEnd

• **warrantyTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_end = 43;

#### Defined in

src/inventory.scailo_pb.ts:1080

___

### warrantyTimestampStart

• **warrantyTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_start = 42;

#### Defined in

src/inventory.scailo_pb.ts:1073

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:1103

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:1101

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FilterReturnableInventoryReq"``

#### Defined in

src/inventory.scailo_pb.ts:1102

## Methods

### clone

▸ **clone**(): [`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)

Create a deep copy.

#### Returns

[`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md) \| `PlainMessage`\<[`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)\>

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
| `a` | `undefined` \| [`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md) \| `PlainMessage`\<[`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)\> |
| `b` | `undefined` \| [`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md) \| `PlainMessage`\<[`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:1141

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)

#### Defined in

src/inventory.scailo_pb.ts:1129

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)

#### Defined in

src/inventory.scailo_pb.ts:1133

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FilterReturnableInventoryReq`](FilterReturnableInventoryReq.md)

#### Defined in

src/inventory.scailo_pb.ts:1137
