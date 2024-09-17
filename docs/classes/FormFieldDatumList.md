[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormFieldDatumList

# Class: FormFieldDatumList

Describes the message consisting of the list of records

**`Generated`**

from message Scailo.FormFieldDatumList

## Hierarchy

- `Message`\<[`FormFieldDatumList`](FormFieldDatumList.md)\>

  ↳ **`FormFieldDatumList`**

## Table of contents

### Constructors

- [constructor](FormFieldDatumList.md#constructor)

### Properties

- [list](FormFieldDatumList.md#list)
- [fields](FormFieldDatumList.md#fields)
- [runtime](FormFieldDatumList.md#runtime)
- [typeName](FormFieldDatumList.md#typename)

### Methods

- [clone](FormFieldDatumList.md#clone)
- [equals](FormFieldDatumList.md#equals)
- [fromBinary](FormFieldDatumList.md#frombinary)
- [fromJson](FormFieldDatumList.md#fromjson)
- [fromJsonString](FormFieldDatumList.md#fromjsonstring)
- [getType](FormFieldDatumList.md#gettype)
- [toBinary](FormFieldDatumList.md#tobinary)
- [toJSON](FormFieldDatumList.md#tojson)
- [toJson](FormFieldDatumList.md#tojson-1)
- [toJsonString](FormFieldDatumList.md#tojsonstring)
- [equals](FormFieldDatumList.md#equals-1)
- [fromBinary](FormFieldDatumList.md#frombinary-1)
- [fromJson](FormFieldDatumList.md#fromjson-1)
- [fromJsonString](FormFieldDatumList.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormFieldDatumList**(`data?`): [`FormFieldDatumList`](FormFieldDatumList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormFieldDatumList`](FormFieldDatumList.md)\> |

#### Returns

[`FormFieldDatumList`](FormFieldDatumList.md)

#### Overrides

Message\&lt;FormFieldDatumList\&gt;.constructor

#### Defined in

src/forms_fields_data.scailo_pb.ts:181

## Properties

### list

• **list**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.FormFieldDatum list = 1;

#### Defined in

src/forms_fields_data.scailo_pb.ts:179

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/forms_fields_data.scailo_pb.ts:188

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/forms_fields_data.scailo_pb.ts:186

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormFieldDatumList"``

#### Defined in

src/forms_fields_data.scailo_pb.ts:187

## Methods

### clone

▸ **clone**(): [`FormFieldDatumList`](FormFieldDatumList.md)

Create a deep copy.

#### Returns

[`FormFieldDatumList`](FormFieldDatumList.md)

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
| `other` | `undefined` \| ``null`` \| [`FormFieldDatumList`](FormFieldDatumList.md) \| `PlainMessage`\<[`FormFieldDatumList`](FormFieldDatumList.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormFieldDatumList`](FormFieldDatumList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormFieldDatumList`](FormFieldDatumList.md)\>

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
| `a` | `undefined` \| [`FormFieldDatumList`](FormFieldDatumList.md) \| `PlainMessage`\<[`FormFieldDatumList`](FormFieldDatumList.md)\> |
| `b` | `undefined` \| [`FormFieldDatumList`](FormFieldDatumList.md) \| `PlainMessage`\<[`FormFieldDatumList`](FormFieldDatumList.md)\> |

#### Returns

`boolean`

#### Defined in

src/forms_fields_data.scailo_pb.ts:204

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormFieldDatumList`](FormFieldDatumList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormFieldDatumList`](FormFieldDatumList.md)

#### Defined in

src/forms_fields_data.scailo_pb.ts:192

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormFieldDatumList`](FormFieldDatumList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumList`](FormFieldDatumList.md)

#### Defined in

src/forms_fields_data.scailo_pb.ts:196

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormFieldDatumList`](FormFieldDatumList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumList`](FormFieldDatumList.md)

#### Defined in

src/forms_fields_data.scailo_pb.ts:200
