[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesServiceAutofillRequest

# Class: SalariesServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.SalariesServiceAutofillRequest

## Hierarchy

- `Message`\<[`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)\>

  ↳ **`SalariesServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](SalariesServiceAutofillRequest.md#constructor)

### Properties

- [id](SalariesServiceAutofillRequest.md#id)
- [userComment](SalariesServiceAutofillRequest.md#usercomment)
- [fields](SalariesServiceAutofillRequest.md#fields)
- [runtime](SalariesServiceAutofillRequest.md#runtime)
- [typeName](SalariesServiceAutofillRequest.md#typename)

### Methods

- [clone](SalariesServiceAutofillRequest.md#clone)
- [equals](SalariesServiceAutofillRequest.md#equals)
- [fromBinary](SalariesServiceAutofillRequest.md#frombinary)
- [fromJson](SalariesServiceAutofillRequest.md#fromjson)
- [fromJsonString](SalariesServiceAutofillRequest.md#fromjsonstring)
- [getType](SalariesServiceAutofillRequest.md#gettype)
- [toBinary](SalariesServiceAutofillRequest.md#tobinary)
- [toJSON](SalariesServiceAutofillRequest.md#tojson)
- [toJson](SalariesServiceAutofillRequest.md#tojson-1)
- [toJsonString](SalariesServiceAutofillRequest.md#tojsonstring)
- [equals](SalariesServiceAutofillRequest.md#equals-1)
- [fromBinary](SalariesServiceAutofillRequest.md#frombinary-1)
- [fromJson](SalariesServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](SalariesServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesServiceAutofillRequest**(`data?`): [`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)\> |

#### Returns

[`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)

#### Overrides

Message\&lt;SalariesServiceAutofillRequest\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:543

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/salaries.scailo_pb.ts:541

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/salaries.scailo_pb.ts:534

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:550

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:548

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServiceAutofillRequest"``

#### Defined in

src/salaries.scailo_pb.ts:549

## Methods

### clone

▸ **clone**(): [`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md) \| `PlainMessage`\<[`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md) \| `PlainMessage`\<[`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md) \| `PlainMessage`\<[`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:567

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:555

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:559

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceAutofillRequest`](SalariesServiceAutofillRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:563
