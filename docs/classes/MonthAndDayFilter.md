[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MonthAndDayFilter

# Class: MonthAndDayFilter

Describes the payload that will be used to filter records on the basis of the given month and day

**`Generated`**

from message Scailo.MonthAndDayFilter

## Hierarchy

- `Message`\<[`MonthAndDayFilter`](MonthAndDayFilter.md)\>

  ↳ **`MonthAndDayFilter`**

## Table of contents

### Constructors

- [constructor](MonthAndDayFilter.md#constructor)

### Properties

- [day](MonthAndDayFilter.md#day)
- [month](MonthAndDayFilter.md#month)
- [fields](MonthAndDayFilter.md#fields)
- [runtime](MonthAndDayFilter.md#runtime)
- [typeName](MonthAndDayFilter.md#typename)

### Methods

- [clone](MonthAndDayFilter.md#clone)
- [equals](MonthAndDayFilter.md#equals)
- [fromBinary](MonthAndDayFilter.md#frombinary)
- [fromJson](MonthAndDayFilter.md#fromjson)
- [fromJsonString](MonthAndDayFilter.md#fromjsonstring)
- [getType](MonthAndDayFilter.md#gettype)
- [toBinary](MonthAndDayFilter.md#tobinary)
- [toJSON](MonthAndDayFilter.md#tojson)
- [toJson](MonthAndDayFilter.md#tojson-1)
- [toJsonString](MonthAndDayFilter.md#tojsonstring)
- [equals](MonthAndDayFilter.md#equals-1)
- [fromBinary](MonthAndDayFilter.md#frombinary-1)
- [fromJson](MonthAndDayFilter.md#fromjson-1)
- [fromJsonString](MonthAndDayFilter.md#fromjsonstring-1)

## Constructors

### constructor

• **new MonthAndDayFilter**(`data?`): [`MonthAndDayFilter`](MonthAndDayFilter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MonthAndDayFilter`](MonthAndDayFilter.md)\> |

#### Returns

[`MonthAndDayFilter`](MonthAndDayFilter.md)

#### Overrides

Message\&lt;MonthAndDayFilter\&gt;.constructor

#### Defined in

src/base.scailo_pb.ts:1517

## Properties

### day

• **day**: `bigint` = `protoInt64.zero`

Stores the day

**`Generated`**

from field: uint64 day = 2;

#### Defined in

src/base.scailo_pb.ts:1515

___

### month

• **month**: `bigint` = `protoInt64.zero`

Stores the month (1 for Jan, 2 for Feb, etc.)

**`Generated`**

from field: uint64 month = 1;

#### Defined in

src/base.scailo_pb.ts:1508

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/base.scailo_pb.ts:1524

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/base.scailo_pb.ts:1522

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MonthAndDayFilter"``

#### Defined in

src/base.scailo_pb.ts:1523

## Methods

### clone

▸ **clone**(): [`MonthAndDayFilter`](MonthAndDayFilter.md)

Create a deep copy.

#### Returns

[`MonthAndDayFilter`](MonthAndDayFilter.md)

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
| `other` | `undefined` \| ``null`` \| [`MonthAndDayFilter`](MonthAndDayFilter.md) \| `PlainMessage`\<[`MonthAndDayFilter`](MonthAndDayFilter.md)\> |

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

▸ **getType**(): `MessageType`\<[`MonthAndDayFilter`](MonthAndDayFilter.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MonthAndDayFilter`](MonthAndDayFilter.md)\>

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
| `a` | `undefined` \| [`MonthAndDayFilter`](MonthAndDayFilter.md) \| `PlainMessage`\<[`MonthAndDayFilter`](MonthAndDayFilter.md)\> |
| `b` | `undefined` \| [`MonthAndDayFilter`](MonthAndDayFilter.md) \| `PlainMessage`\<[`MonthAndDayFilter`](MonthAndDayFilter.md)\> |

#### Returns

`boolean`

#### Defined in

src/base.scailo_pb.ts:1541

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MonthAndDayFilter`](MonthAndDayFilter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MonthAndDayFilter`](MonthAndDayFilter.md)

#### Defined in

src/base.scailo_pb.ts:1529

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MonthAndDayFilter`](MonthAndDayFilter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MonthAndDayFilter`](MonthAndDayFilter.md)

#### Defined in

src/base.scailo_pb.ts:1533

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MonthAndDayFilter`](MonthAndDayFilter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MonthAndDayFilter`](MonthAndDayFilter.md)

#### Defined in

src/base.scailo_pb.ts:1537
