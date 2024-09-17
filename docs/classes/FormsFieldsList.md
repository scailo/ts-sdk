[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsFieldsList

# Class: FormsFieldsList

Describes the data structure that stores a list of forms fields

**`Generated`**

from message Scailo.FormsFieldsList

## Hierarchy

- `Message`\<[`FormsFieldsList`](FormsFieldsList.md)\>

  ↳ **`FormsFieldsList`**

## Table of contents

### Constructors

- [constructor](FormsFieldsList.md#constructor)

### Properties

- [list](FormsFieldsList.md#list)
- [fields](FormsFieldsList.md#fields)
- [runtime](FormsFieldsList.md#runtime)
- [typeName](FormsFieldsList.md#typename)

### Methods

- [clone](FormsFieldsList.md#clone)
- [equals](FormsFieldsList.md#equals)
- [fromBinary](FormsFieldsList.md#frombinary)
- [fromJson](FormsFieldsList.md#fromjson)
- [fromJsonString](FormsFieldsList.md#fromjsonstring)
- [getType](FormsFieldsList.md#gettype)
- [toBinary](FormsFieldsList.md#tobinary)
- [toJSON](FormsFieldsList.md#tojson)
- [toJson](FormsFieldsList.md#tojson-1)
- [toJsonString](FormsFieldsList.md#tojsonstring)
- [equals](FormsFieldsList.md#equals-1)
- [fromBinary](FormsFieldsList.md#frombinary-1)
- [fromJson](FormsFieldsList.md#fromjson-1)
- [fromJsonString](FormsFieldsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsFieldsList**(`data?`): [`FormsFieldsList`](FormsFieldsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsFieldsList`](FormsFieldsList.md)\> |

#### Returns

[`FormsFieldsList`](FormsFieldsList.md)

#### Overrides

Message\&lt;FormsFieldsList\&gt;.constructor

#### Defined in

src/forms_fields.scailo_pb.ts:197

## Properties

### list

• **list**: [`FormField`](FormField.md)[] = `[]`

List of forms fields

**`Generated`**

from field: repeated Scailo.FormField list = 1;

#### Defined in

src/forms_fields.scailo_pb.ts:195

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/forms_fields.scailo_pb.ts:204

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/forms_fields.scailo_pb.ts:202

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsFieldsList"``

#### Defined in

src/forms_fields.scailo_pb.ts:203

## Methods

### clone

▸ **clone**(): [`FormsFieldsList`](FormsFieldsList.md)

Create a deep copy.

#### Returns

[`FormsFieldsList`](FormsFieldsList.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsFieldsList`](FormsFieldsList.md) \| `PlainMessage`\<[`FormsFieldsList`](FormsFieldsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsFieldsList`](FormsFieldsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsFieldsList`](FormsFieldsList.md)\>

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
| `a` | `undefined` \| [`FormsFieldsList`](FormsFieldsList.md) \| `PlainMessage`\<[`FormsFieldsList`](FormsFieldsList.md)\> |
| `b` | `undefined` \| [`FormsFieldsList`](FormsFieldsList.md) \| `PlainMessage`\<[`FormsFieldsList`](FormsFieldsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/forms_fields.scailo_pb.ts:220

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsFieldsList`](FormsFieldsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsFieldsList`](FormsFieldsList.md)

#### Defined in

src/forms_fields.scailo_pb.ts:208

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsFieldsList`](FormsFieldsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsFieldsList`](FormsFieldsList.md)

#### Defined in

src/forms_fields.scailo_pb.ts:212

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsFieldsList`](FormsFieldsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsFieldsList`](FormsFieldsList.md)

#### Defined in

src/forms_fields.scailo_pb.ts:216
