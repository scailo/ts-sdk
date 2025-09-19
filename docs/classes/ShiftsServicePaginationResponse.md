[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsServicePaginationResponse

# Class: ShiftsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.ShiftsServicePaginationResponse

## Hierarchy

- `Message`\<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\>

  ↳ **`ShiftsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](ShiftsServicePaginationResponse.md#constructor)

### Properties

- [count](ShiftsServicePaginationResponse.md#count)
- [offset](ShiftsServicePaginationResponse.md#offset)
- [payload](ShiftsServicePaginationResponse.md#payload)
- [total](ShiftsServicePaginationResponse.md#total)
- [fields](ShiftsServicePaginationResponse.md#fields)
- [runtime](ShiftsServicePaginationResponse.md#runtime)
- [typeName](ShiftsServicePaginationResponse.md#typename)

### Methods

- [clone](ShiftsServicePaginationResponse.md#clone)
- [equals](ShiftsServicePaginationResponse.md#equals)
- [fromBinary](ShiftsServicePaginationResponse.md#frombinary)
- [fromJson](ShiftsServicePaginationResponse.md#fromjson)
- [fromJsonString](ShiftsServicePaginationResponse.md#fromjsonstring)
- [getType](ShiftsServicePaginationResponse.md#gettype)
- [toBinary](ShiftsServicePaginationResponse.md#tobinary)
- [toJSON](ShiftsServicePaginationResponse.md#tojson)
- [toJson](ShiftsServicePaginationResponse.md#tojson-1)
- [toJsonString](ShiftsServicePaginationResponse.md#tojsonstring)
- [equals](ShiftsServicePaginationResponse.md#equals-1)
- [fromBinary](ShiftsServicePaginationResponse.md#frombinary-1)
- [fromJson](ShiftsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](ShiftsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsServicePaginationResponse**(`data?`): [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\> |

#### Returns

[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Overrides

Message\&lt;ShiftsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/shifts.scailo_pb.ts:650](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L650)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/shifts.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L627)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/shifts.scailo_pb.ts:634](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L634)

___

### payload

• **payload**: [`Shift`](Shift.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Shift payload = 4;

#### Defined in

[src/shifts.scailo_pb.ts:648](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L648)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/shifts.scailo_pb.ts:641](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L641)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts.scailo_pb.ts:657](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L657)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L655)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsServicePaginationResponse"``

#### Defined in

[src/shifts.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L656)

## Methods

### clone

▸ **clone**(): [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md) \| `PlainMessage`\<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md) \| `PlainMessage`\<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md) \| `PlainMessage`\<[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts.scailo_pb.ts:676](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L676)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Defined in

[src/shifts.scailo_pb.ts:664](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L664)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Defined in

[src/shifts.scailo_pb.ts:668](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L668)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsServicePaginationResponse`](ShiftsServicePaginationResponse.md)

#### Defined in

[src/shifts.scailo_pb.ts:672](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/shifts.scailo_pb.ts#L672)
