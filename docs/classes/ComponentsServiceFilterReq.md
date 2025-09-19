[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ComponentsServiceFilterReq

# Class: ComponentsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.ComponentsServiceFilterReq

## Hierarchy

- `Message`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\>

  ↳ **`ComponentsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](ComponentsServiceFilterReq.md#constructor)

### Properties

- [code](ComponentsServiceFilterReq.md#code)
- [count](ComponentsServiceFilterReq.md#count)
- [creationTimestampEnd](ComponentsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](ComponentsServiceFilterReq.md#creationtimestampstart)
- [discardedAtEnd](ComponentsServiceFilterReq.md#discardedatend)
- [discardedAtStart](ComponentsServiceFilterReq.md#discardedatstart)
- [entityUuid](ComponentsServiceFilterReq.md#entityuuid)
- [familyId](ComponentsServiceFilterReq.md#familyid)
- [hash](ComponentsServiceFilterReq.md#hash)
- [internalItemCode](ComponentsServiceFilterReq.md#internalitemcode)
- [isActive](ComponentsServiceFilterReq.md#isactive)
- [isQcReportPublic](ComponentsServiceFilterReq.md#isqcreportpublic)
- [locationId](ComponentsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](ComponentsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](ComponentsServiceFilterReq.md#modificationtimestampstart)
- [offset](ComponentsServiceFilterReq.md#offset)
- [parentRefId](ComponentsServiceFilterReq.md#parentrefid)
- [quantityRemainingMax](ComponentsServiceFilterReq.md#quantityremainingmax)
- [quantityRemainingMin](ComponentsServiceFilterReq.md#quantityremainingmin)
- [refFrom](ComponentsServiceFilterReq.md#reffrom)
- [refId](ComponentsServiceFilterReq.md#refid)
- [secondaryUomId](ComponentsServiceFilterReq.md#secondaryuomid)
- [shelfLifeTimestampEnd](ComponentsServiceFilterReq.md#shelflifetimestampend)
- [shelfLifeTimestampStart](ComponentsServiceFilterReq.md#shelflifetimestampstart)
- [sortKey](ComponentsServiceFilterReq.md#sortkey)
- [sortOrder](ComponentsServiceFilterReq.md#sortorder)
- [status](ComponentsServiceFilterReq.md#status)
- [storageId](ComponentsServiceFilterReq.md#storageid)
- [storeId](ComponentsServiceFilterReq.md#storeid)
- [storeIntakeAtEnd](ComponentsServiceFilterReq.md#storeintakeatend)
- [storeIntakeAtStart](ComponentsServiceFilterReq.md#storeintakeatstart)
- [vendorId](ComponentsServiceFilterReq.md#vendorid)
- [warrantyTimestampEnd](ComponentsServiceFilterReq.md#warrantytimestampend)
- [warrantyTimestampStart](ComponentsServiceFilterReq.md#warrantytimestampstart)
- [fields](ComponentsServiceFilterReq.md#fields)
- [runtime](ComponentsServiceFilterReq.md#runtime)
- [typeName](ComponentsServiceFilterReq.md#typename)

### Methods

- [clone](ComponentsServiceFilterReq.md#clone)
- [equals](ComponentsServiceFilterReq.md#equals)
- [fromBinary](ComponentsServiceFilterReq.md#frombinary)
- [fromJson](ComponentsServiceFilterReq.md#fromjson)
- [fromJsonString](ComponentsServiceFilterReq.md#fromjsonstring)
- [getType](ComponentsServiceFilterReq.md#gettype)
- [toBinary](ComponentsServiceFilterReq.md#tobinary)
- [toJSON](ComponentsServiceFilterReq.md#tojson)
- [toJson](ComponentsServiceFilterReq.md#tojson-1)
- [toJsonString](ComponentsServiceFilterReq.md#tojsonstring)
- [equals](ComponentsServiceFilterReq.md#equals-1)
- [fromBinary](ComponentsServiceFilterReq.md#frombinary-1)
- [fromJson](ComponentsServiceFilterReq.md#fromjson-1)
- [fromJsonString](ComponentsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ComponentsServiceFilterReq**(`data?`): [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\> |

#### Returns

[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Overrides

Message\&lt;ComponentsServiceFilterReq\&gt;.constructor

#### Defined in

[src/components.scailo_pb.ts:1178](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1178)

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the component

**`Generated`**

from field: string code = 34;

#### Defined in

[src/components.scailo_pb.ts:1076](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1076)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/components.scailo_pb.ts:950](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L950)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/components.scailo_pb.ts:985](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L985)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/components.scailo_pb.ts:978](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L978)

___

### discardedAtEnd

• **discardedAtEnd**: `bigint` = `protoInt64.zero`

The end range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_end = 23;

#### Defined in

[src/components.scailo_pb.ts:1041](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1041)

___

### discardedAtStart

• **discardedAtStart**: `bigint` = `protoInt64.zero`

The start range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_start = 22;

#### Defined in

[src/components.scailo_pb.ts:1034](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1034)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/components.scailo_pb.ts:1006](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1006)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/components.scailo_pb.ts:1069](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1069)

___

### hash

• **hash**: `string` = `""`

The computed hash of the component

**`Generated`**

from field: string hash = 36;

#### Defined in

[src/components.scailo_pb.ts:1090](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1090)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/components.scailo_pb.ts:1083](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1083)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/components.scailo_pb.ts:943](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L943)

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

[src/components.scailo_pb.ts:1160](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1160)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Filter by the location ID

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/components.scailo_pb.ts:1167](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1167)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/components.scailo_pb.ts:999](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L999)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/components.scailo_pb.ts:992](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L992)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/components.scailo_pb.ts:957](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L957)

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

[src/components.scailo_pb.ts:1048](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1048)

___

### quantityRemainingMax

• **quantityRemainingMax**: `bigint` = `protoInt64.zero`

The maximum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_max = 38;

#### Defined in

[src/components.scailo_pb.ts:1104](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1104)

___

### quantityRemainingMin

• **quantityRemainingMin**: `bigint` = `protoInt64.zero`

The minimum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_min = 37;

#### Defined in

[src/components.scailo_pb.ts:1097](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1097)

___

### refFrom

• **refFrom**: [`COMPONENT_REF_FROM`](../enums/COMPONENT_REF_FROM.md) = `COMPONENT_REF_FROM.COMPONENT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.COMPONENT_REF_FROM ref_from = 31;

#### Defined in

[src/components.scailo_pb.ts:1055](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1055)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/components.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1062)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of component

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/components.scailo_pb.ts:1111](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1111)

___

### shelfLifeTimestampEnd

• **shelfLifeTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_end = 41;

#### Defined in

[src/components.scailo_pb.ts:1125](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1125)

___

### shelfLifeTimestampStart

• **shelfLifeTimestampStart**: `bigint` = `protoInt64.zero`

The start range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_start = 40;

#### Defined in

[src/components.scailo_pb.ts:1118](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1118)

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

[src/components.scailo_pb.ts:971](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L971)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/components.scailo_pb.ts:964](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L964)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this component

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

[src/components.scailo_pb.ts:1013](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1013)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the component is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/components.scailo_pb.ts:1153](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1153)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the component is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/components.scailo_pb.ts:1146](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1146)

___

### storeIntakeAtEnd

• **storeIntakeAtEnd**: `bigint` = `protoInt64.zero`

The end range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_end = 21;

#### Defined in

[src/components.scailo_pb.ts:1027](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1027)

___

### storeIntakeAtStart

• **storeIntakeAtStart**: `bigint` = `protoInt64.zero`

The start range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_start = 20;

#### Defined in

[src/components.scailo_pb.ts:1020](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1020)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Filter by the given vendor ID

--------------------------------------------------

**`Generated`**

from field: uint64 vendor_id = 81;

#### Defined in

[src/components.scailo_pb.ts:1176](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1176)

___

### warrantyTimestampEnd

• **warrantyTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_end = 43;

#### Defined in

[src/components.scailo_pb.ts:1139](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1139)

___

### warrantyTimestampStart

• **warrantyTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_start = 42;

#### Defined in

[src/components.scailo_pb.ts:1132](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1132)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/components.scailo_pb.ts:1185](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1185)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/components.scailo_pb.ts:1183](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1183)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ComponentsServiceFilterReq"``

#### Defined in

[src/components.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1184)

## Methods

### clone

▸ **clone**(): [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md) \| `PlainMessage`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md) \| `PlainMessage`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md) \| `PlainMessage`\<[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/components.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1234)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Defined in

[src/components.scailo_pb.ts:1222](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1222)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Defined in

[src/components.scailo_pb.ts:1226](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1226)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceFilterReq`](ComponentsServiceFilterReq.md)

#### Defined in

[src/components.scailo_pb.ts:1230](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1230)
