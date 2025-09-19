[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendancesAmendmentsServicePaginationReq

# Class: AttendancesAmendmentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.AttendancesAmendmentsServicePaginationReq

## Hierarchy

- `Message`\<[`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)\>

  ↳ **`AttendancesAmendmentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](AttendancesAmendmentsServicePaginationReq.md#constructor)

### Properties

- [count](AttendancesAmendmentsServicePaginationReq.md#count)
- [isActive](AttendancesAmendmentsServicePaginationReq.md#isactive)
- [offset](AttendancesAmendmentsServicePaginationReq.md#offset)
- [sortKey](AttendancesAmendmentsServicePaginationReq.md#sortkey)
- [sortOrder](AttendancesAmendmentsServicePaginationReq.md#sortorder)
- [status](AttendancesAmendmentsServicePaginationReq.md#status)
- [fields](AttendancesAmendmentsServicePaginationReq.md#fields)
- [runtime](AttendancesAmendmentsServicePaginationReq.md#runtime)
- [typeName](AttendancesAmendmentsServicePaginationReq.md#typename)

### Methods

- [clone](AttendancesAmendmentsServicePaginationReq.md#clone)
- [equals](AttendancesAmendmentsServicePaginationReq.md#equals)
- [fromBinary](AttendancesAmendmentsServicePaginationReq.md#frombinary)
- [fromJson](AttendancesAmendmentsServicePaginationReq.md#fromjson)
- [fromJsonString](AttendancesAmendmentsServicePaginationReq.md#fromjsonstring)
- [getType](AttendancesAmendmentsServicePaginationReq.md#gettype)
- [toBinary](AttendancesAmendmentsServicePaginationReq.md#tobinary)
- [toJSON](AttendancesAmendmentsServicePaginationReq.md#tojson)
- [toJson](AttendancesAmendmentsServicePaginationReq.md#tojson-1)
- [toJsonString](AttendancesAmendmentsServicePaginationReq.md#tojsonstring)
- [equals](AttendancesAmendmentsServicePaginationReq.md#equals-1)
- [fromBinary](AttendancesAmendmentsServicePaginationReq.md#frombinary-1)
- [fromJson](AttendancesAmendmentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](AttendancesAmendmentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesAmendmentsServicePaginationReq**(`data?`): [`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)\> |

#### Returns

[`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)

#### Overrides

Message\&lt;AttendancesAmendmentsServicePaginationReq\&gt;.constructor

#### Defined in

[src/attendances_amendments.scailo_pb.ts:615](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L615)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:585](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L585)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:578](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L578)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:592](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L592)

___

### sortKey

• **sortKey**: [`ATTENDANCE_AMENDMENT_SORT_KEY`](../enums/ATTENDANCE_AMENDMENT_SORT_KEY.md) = `ATTENDANCE_AMENDMENT_SORT_KEY.ATTENDANCE_AMENDMENT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.ATTENDANCE_AMENDMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L606)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L599)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this attendance amendment

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/attendances_amendments.scailo_pb.ts:613](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L613)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:622](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L622)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:620](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L620)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesAmendmentsServicePaginationReq"``

#### Defined in

[src/attendances_amendments.scailo_pb.ts:621](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L621)

## Methods

### clone

▸ **clone**(): [`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md) \| `PlainMessage`\<[`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md) \| `PlainMessage`\<[`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md) \| `PlainMessage`\<[`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances_amendments.scailo_pb.ts:643](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L643)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:631](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L631)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:635](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L635)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesAmendmentsServicePaginationReq`](AttendancesAmendmentsServicePaginationReq.md)

#### Defined in

[src/attendances_amendments.scailo_pb.ts:639](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances_amendments.scailo_pb.ts#L639)
