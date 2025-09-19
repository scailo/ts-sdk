[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServiceFilterReq

# Class: EquationsWorkOrdersServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.EquationsWorkOrdersServiceFilterReq

## Hierarchy

- `Message`\<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\>

  ↳ **`EquationsWorkOrdersServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](EquationsWorkOrdersServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](EquationsWorkOrdersServiceFilterReq.md#approvedonend)
- [approvedOnStart](EquationsWorkOrdersServiceFilterReq.md#approvedonstart)
- [approverRoleId](EquationsWorkOrdersServiceFilterReq.md#approverroleid)
- [completedOnEnd](EquationsWorkOrdersServiceFilterReq.md#completedonend)
- [completedOnStart](EquationsWorkOrdersServiceFilterReq.md#completedonstart)
- [constituentFamilyId](EquationsWorkOrdersServiceFilterReq.md#constituentfamilyid)
- [count](EquationsWorkOrdersServiceFilterReq.md#count)
- [creationTimestampEnd](EquationsWorkOrdersServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](EquationsWorkOrdersServiceFilterReq.md#creationtimestampstart)
- [entityUuid](EquationsWorkOrdersServiceFilterReq.md#entityuuid)
- [isActive](EquationsWorkOrdersServiceFilterReq.md#isactive)
- [modificationTimestampEnd](EquationsWorkOrdersServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](EquationsWorkOrdersServiceFilterReq.md#modificationtimestampstart)
- [name](EquationsWorkOrdersServiceFilterReq.md#name)
- [offset](EquationsWorkOrdersServiceFilterReq.md#offset)
- [sortKey](EquationsWorkOrdersServiceFilterReq.md#sortkey)
- [sortOrder](EquationsWorkOrdersServiceFilterReq.md#sortorder)
- [status](EquationsWorkOrdersServiceFilterReq.md#status)
- [workOrderId](EquationsWorkOrdersServiceFilterReq.md#workorderid)
- [fields](EquationsWorkOrdersServiceFilterReq.md#fields)
- [runtime](EquationsWorkOrdersServiceFilterReq.md#runtime)
- [typeName](EquationsWorkOrdersServiceFilterReq.md#typename)

### Methods

- [clone](EquationsWorkOrdersServiceFilterReq.md#clone)
- [equals](EquationsWorkOrdersServiceFilterReq.md#equals)
- [fromBinary](EquationsWorkOrdersServiceFilterReq.md#frombinary)
- [fromJson](EquationsWorkOrdersServiceFilterReq.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServiceFilterReq.md#fromjsonstring)
- [getType](EquationsWorkOrdersServiceFilterReq.md#gettype)
- [toBinary](EquationsWorkOrdersServiceFilterReq.md#tobinary)
- [toJSON](EquationsWorkOrdersServiceFilterReq.md#tojson)
- [toJson](EquationsWorkOrdersServiceFilterReq.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServiceFilterReq.md#tojsonstring)
- [equals](EquationsWorkOrdersServiceFilterReq.md#equals-1)
- [fromBinary](EquationsWorkOrdersServiceFilterReq.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServiceFilterReq.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServiceFilterReq**(`data?`): [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\> |

#### Returns

[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Overrides

Message\&lt;EquationsWorkOrdersServiceFilterReq\&gt;.constructor

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1432](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1432)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1388](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1388)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1381](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1381)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1374](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1374)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1395](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1395)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1409](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1409)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1402](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1402)

___

### constituentFamilyId

• **constituentFamilyId**: `bigint` = `protoInt64.zero`

The ID of the constituent family that is part of an equation

**`Generated`**

from field: uint64 constituent_family_id = 30;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1430](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1430)

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1304](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1304)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1339](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1339)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1332](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1332)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1360](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1360)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1297](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1297)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1353](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1353)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1346](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1346)

___

### name

• **name**: `string` = `""`

The name of the equation work order

**`Generated`**

from field: string name = 20;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1416](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1416)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1311](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1311)

___

### sortKey

• **sortKey**: [`EQUATION_WORK_ORDER_SORT_KEY`](../enums/EQUATION_WORK_ORDER_SORT_KEY.md) = `EQUATION_WORK_ORDER_SORT_KEY.EQUATION_WORK_ORDER_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.EQUATION_WORK_ORDER_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1325](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1325)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1318](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1318)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this equation work order

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1367](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1367)

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

The ID of the work order that this equation belongs to

**`Generated`**

from field: uint64 work_order_id = 21;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1423](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1423)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1439](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1439)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1437](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1437)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsWorkOrdersServiceFilterReq"``

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1438](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1438)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1474)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1462](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1462)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1466](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1466)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceFilterReq`](EquationsWorkOrdersServiceFilterReq.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:1470](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L1470)
