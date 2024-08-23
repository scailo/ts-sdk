[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsSectionsList

# Class: FormsSectionsList

Describes the data structure that stores a list of forms sections

**`Generated`**

from message Scailo.FormsSectionsList

## Hierarchy

- `Message`\<[`FormsSectionsList`](FormsSectionsList.md)\>

  ↳ **`FormsSectionsList`**

## Table of contents

### Constructors

- [constructor](FormsSectionsList.md#constructor)

### Properties

- [list](FormsSectionsList.md#list)
- [fields](FormsSectionsList.md#fields)
- [runtime](FormsSectionsList.md#runtime)
- [typeName](FormsSectionsList.md#typename)

### Methods

- [clone](FormsSectionsList.md#clone)
- [equals](FormsSectionsList.md#equals)
- [fromBinary](FormsSectionsList.md#frombinary)
- [fromJson](FormsSectionsList.md#fromjson)
- [fromJsonString](FormsSectionsList.md#fromjsonstring)
- [getType](FormsSectionsList.md#gettype)
- [toBinary](FormsSectionsList.md#tobinary)
- [toJSON](FormsSectionsList.md#tojson)
- [toJson](FormsSectionsList.md#tojson-1)
- [toJsonString](FormsSectionsList.md#tojsonstring)
- [equals](FormsSectionsList.md#equals-1)
- [fromBinary](FormsSectionsList.md#frombinary-1)
- [fromJson](FormsSectionsList.md#fromjson-1)
- [fromJsonString](FormsSectionsList.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsSectionsList**(`data?`): [`FormsSectionsList`](FormsSectionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsSectionsList`](FormsSectionsList.md)\> |

#### Returns

[`FormsSectionsList`](FormsSectionsList.md)

#### Overrides

Message\&lt;FormsSectionsList\&gt;.constructor

#### Defined in

src/forms_sections.scailo_pb.ts:149

## Properties

### list

• **list**: [`FormSection`](FormSection.md)[] = `[]`

List of forms sections

**`Generated`**

from field: repeated Scailo.FormSection list = 1;

#### Defined in

src/forms_sections.scailo_pb.ts:147

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/forms_sections.scailo_pb.ts:156

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/forms_sections.scailo_pb.ts:154

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsSectionsList"``

#### Defined in

src/forms_sections.scailo_pb.ts:155

## Methods

### clone

▸ **clone**(): [`FormsSectionsList`](FormsSectionsList.md)

Create a deep copy.

#### Returns

[`FormsSectionsList`](FormsSectionsList.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsSectionsList`](FormsSectionsList.md) \| `PlainMessage`\<[`FormsSectionsList`](FormsSectionsList.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsSectionsList`](FormsSectionsList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsSectionsList`](FormsSectionsList.md)\>

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
| `a` | `undefined` \| [`FormsSectionsList`](FormsSectionsList.md) \| `PlainMessage`\<[`FormsSectionsList`](FormsSectionsList.md)\> |
| `b` | `undefined` \| [`FormsSectionsList`](FormsSectionsList.md) \| `PlainMessage`\<[`FormsSectionsList`](FormsSectionsList.md)\> |

#### Returns

`boolean`

#### Defined in

src/forms_sections.scailo_pb.ts:172

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsSectionsList`](FormsSectionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsSectionsList`](FormsSectionsList.md)

#### Defined in

src/forms_sections.scailo_pb.ts:160

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsSectionsList`](FormsSectionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsList`](FormsSectionsList.md)

#### Defined in

src/forms_sections.scailo_pb.ts:164

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsSectionsList`](FormsSectionsList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsList`](FormsSectionsList.md)

#### Defined in

src/forms_sections.scailo_pb.ts:168
