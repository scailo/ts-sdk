[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormSectionPaginationResp

# Class: FormSectionPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message Scailo.FormSectionPaginationResp

## Hierarchy

- `Message`\<[`FormSectionPaginationResp`](FormSectionPaginationResp.md)\>

  ↳ **`FormSectionPaginationResp`**

## Table of contents

### Constructors

- [constructor](FormSectionPaginationResp.md#constructor)

### Properties

- [count](FormSectionPaginationResp.md#count)
- [offset](FormSectionPaginationResp.md#offset)
- [payload](FormSectionPaginationResp.md#payload)
- [total](FormSectionPaginationResp.md#total)
- [fields](FormSectionPaginationResp.md#fields)
- [runtime](FormSectionPaginationResp.md#runtime)
- [typeName](FormSectionPaginationResp.md#typename)

### Methods

- [clone](FormSectionPaginationResp.md#clone)
- [equals](FormSectionPaginationResp.md#equals)
- [fromBinary](FormSectionPaginationResp.md#frombinary)
- [fromJson](FormSectionPaginationResp.md#fromjson)
- [fromJsonString](FormSectionPaginationResp.md#fromjsonstring)
- [getType](FormSectionPaginationResp.md#gettype)
- [toBinary](FormSectionPaginationResp.md#tobinary)
- [toJSON](FormSectionPaginationResp.md#tojson)
- [toJson](FormSectionPaginationResp.md#tojson-1)
- [toJsonString](FormSectionPaginationResp.md#tojsonstring)
- [equals](FormSectionPaginationResp.md#equals-1)
- [fromBinary](FormSectionPaginationResp.md#frombinary-1)
- [fromJson](FormSectionPaginationResp.md#fromjson-1)
- [fromJsonString](FormSectionPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormSectionPaginationResp**(`data?`): [`FormSectionPaginationResp`](FormSectionPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormSectionPaginationResp`](FormSectionPaginationResp.md)\> |

#### Returns

[`FormSectionPaginationResp`](FormSectionPaginationResp.md)

#### Overrides

Message\&lt;FormSectionPaginationResp\&gt;.constructor

#### Defined in

src/forms_sections.scailo_pb.ts:228

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/forms_sections.scailo_pb.ts:205

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/forms_sections.scailo_pb.ts:212

___

### payload

• **payload**: [`FormSection`](FormSection.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.FormSection payload = 4;

#### Defined in

src/forms_sections.scailo_pb.ts:226

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/forms_sections.scailo_pb.ts:219

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/forms_sections.scailo_pb.ts:235

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/forms_sections.scailo_pb.ts:233

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormSectionPaginationResp"``

#### Defined in

src/forms_sections.scailo_pb.ts:234

## Methods

### clone

▸ **clone**(): [`FormSectionPaginationResp`](FormSectionPaginationResp.md)

Create a deep copy.

#### Returns

[`FormSectionPaginationResp`](FormSectionPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`FormSectionPaginationResp`](FormSectionPaginationResp.md) \| `PlainMessage`\<[`FormSectionPaginationResp`](FormSectionPaginationResp.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormSectionPaginationResp`](FormSectionPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormSectionPaginationResp`](FormSectionPaginationResp.md)\>

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
| `a` | `undefined` \| [`FormSectionPaginationResp`](FormSectionPaginationResp.md) \| `PlainMessage`\<[`FormSectionPaginationResp`](FormSectionPaginationResp.md)\> |
| `b` | `undefined` \| [`FormSectionPaginationResp`](FormSectionPaginationResp.md) \| `PlainMessage`\<[`FormSectionPaginationResp`](FormSectionPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

src/forms_sections.scailo_pb.ts:254

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormSectionPaginationResp`](FormSectionPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormSectionPaginationResp`](FormSectionPaginationResp.md)

#### Defined in

src/forms_sections.scailo_pb.ts:242

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormSectionPaginationResp`](FormSectionPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormSectionPaginationResp`](FormSectionPaginationResp.md)

#### Defined in

src/forms_sections.scailo_pb.ts:246

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormSectionPaginationResp`](FormSectionPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormSectionPaginationResp`](FormSectionPaginationResp.md)

#### Defined in

src/forms_sections.scailo_pb.ts:250
