[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AttendancesServicePaginationResponse

# Class: AttendancesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.AttendancesServicePaginationResponse

## Hierarchy

- `Message`\<[`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)\>

  ↳ **`AttendancesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](AttendancesServicePaginationResponse.md#constructor)

### Properties

- [count](AttendancesServicePaginationResponse.md#count)
- [offset](AttendancesServicePaginationResponse.md#offset)
- [payload](AttendancesServicePaginationResponse.md#payload)
- [total](AttendancesServicePaginationResponse.md#total)
- [fields](AttendancesServicePaginationResponse.md#fields)
- [runtime](AttendancesServicePaginationResponse.md#runtime)
- [typeName](AttendancesServicePaginationResponse.md#typename)

### Methods

- [clone](AttendancesServicePaginationResponse.md#clone)
- [equals](AttendancesServicePaginationResponse.md#equals)
- [fromBinary](AttendancesServicePaginationResponse.md#frombinary)
- [fromJson](AttendancesServicePaginationResponse.md#fromjson)
- [fromJsonString](AttendancesServicePaginationResponse.md#fromjsonstring)
- [getType](AttendancesServicePaginationResponse.md#gettype)
- [toBinary](AttendancesServicePaginationResponse.md#tobinary)
- [toJSON](AttendancesServicePaginationResponse.md#tojson)
- [toJson](AttendancesServicePaginationResponse.md#tojson-1)
- [toJsonString](AttendancesServicePaginationResponse.md#tojsonstring)
- [equals](AttendancesServicePaginationResponse.md#equals-1)
- [fromBinary](AttendancesServicePaginationResponse.md#frombinary-1)
- [fromJson](AttendancesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](AttendancesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new AttendancesServicePaginationResponse**(`data?`): [`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)\> |

#### Returns

[`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)

#### Overrides

Message\&lt;AttendancesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/attendances.scailo_pb.ts:795](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L795)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/attendances.scailo_pb.ts:772](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L772)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/attendances.scailo_pb.ts:779](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L779)

___

### payload

• **payload**: [`Attendance`](Attendance.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Attendance payload = 4;

#### Defined in

[src/attendances.scailo_pb.ts:793](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L793)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/attendances.scailo_pb.ts:786](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L786)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/attendances.scailo_pb.ts:802](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L802)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/attendances.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L800)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AttendancesServicePaginationResponse"``

#### Defined in

[src/attendances.scailo_pb.ts:801](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L801)

## Methods

### clone

▸ **clone**(): [`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md) \| `PlainMessage`\<[`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md) \| `PlainMessage`\<[`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md) \| `PlainMessage`\<[`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/attendances.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L821)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)

#### Defined in

[src/attendances.scailo_pb.ts:809](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L809)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)

#### Defined in

[src/attendances.scailo_pb.ts:813](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L813)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AttendancesServicePaginationResponse`](AttendancesServicePaginationResponse.md)

#### Defined in

[src/attendances.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/attendances.scailo_pb.ts#L817)
