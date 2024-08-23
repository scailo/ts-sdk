[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesServiceAdditionItemUpdateRequest

# Class: SalariesServiceAdditionItemUpdateRequest

Describes the parameters required to update an addition item in a salary

**`Generated`**

from message Scailo.SalariesServiceAdditionItemUpdateRequest

## Hierarchy

- `Message`\<[`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)\>

  ↳ **`SalariesServiceAdditionItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalariesServiceAdditionItemUpdateRequest.md#constructor)

### Properties

- [id](SalariesServiceAdditionItemUpdateRequest.md#id)
- [quantity](SalariesServiceAdditionItemUpdateRequest.md#quantity)
- [userComment](SalariesServiceAdditionItemUpdateRequest.md#usercomment)
- [fields](SalariesServiceAdditionItemUpdateRequest.md#fields)
- [runtime](SalariesServiceAdditionItemUpdateRequest.md#runtime)
- [typeName](SalariesServiceAdditionItemUpdateRequest.md#typename)

### Methods

- [clone](SalariesServiceAdditionItemUpdateRequest.md#clone)
- [equals](SalariesServiceAdditionItemUpdateRequest.md#equals)
- [fromBinary](SalariesServiceAdditionItemUpdateRequest.md#frombinary)
- [fromJson](SalariesServiceAdditionItemUpdateRequest.md#fromjson)
- [fromJsonString](SalariesServiceAdditionItemUpdateRequest.md#fromjsonstring)
- [getType](SalariesServiceAdditionItemUpdateRequest.md#gettype)
- [toBinary](SalariesServiceAdditionItemUpdateRequest.md#tobinary)
- [toJSON](SalariesServiceAdditionItemUpdateRequest.md#tojson)
- [toJson](SalariesServiceAdditionItemUpdateRequest.md#tojson-1)
- [toJsonString](SalariesServiceAdditionItemUpdateRequest.md#tojsonstring)
- [equals](SalariesServiceAdditionItemUpdateRequest.md#equals-1)
- [fromBinary](SalariesServiceAdditionItemUpdateRequest.md#frombinary-1)
- [fromJson](SalariesServiceAdditionItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalariesServiceAdditionItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesServiceAdditionItemUpdateRequest**(`data?`): [`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)\> |

#### Returns

[`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)

#### Overrides

Message\&lt;SalariesServiceAdditionItemUpdateRequest\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:982

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/salaries.scailo_pb.ts:973

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The total quantity of this item (in cents)

**`Generated`**

from field: int64 quantity = 13;

#### Defined in

src/salaries.scailo_pb.ts:980

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/salaries.scailo_pb.ts:966

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:989

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:987

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServiceAdditionItemUpdateRequest"``

#### Defined in

src/salaries.scailo_pb.ts:988

## Methods

### clone

▸ **clone**(): [`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md) \| `PlainMessage`\<[`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md) \| `PlainMessage`\<[`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md) \| `PlainMessage`\<[`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:1007

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:995

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:999

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceAdditionItemUpdateRequest`](SalariesServiceAdditionItemUpdateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1003
