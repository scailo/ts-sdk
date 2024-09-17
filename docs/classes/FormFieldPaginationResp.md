[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormFieldPaginationResp

# Class: FormFieldPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message Scailo.FormFieldPaginationResp

## Hierarchy

- `Message`\<[`FormFieldPaginationResp`](FormFieldPaginationResp.md)\>

  ↳ **`FormFieldPaginationResp`**

## Table of contents

### Constructors

- [constructor](FormFieldPaginationResp.md#constructor)

### Properties

- [count](FormFieldPaginationResp.md#count)
- [offset](FormFieldPaginationResp.md#offset)
- [payload](FormFieldPaginationResp.md#payload)
- [total](FormFieldPaginationResp.md#total)
- [fields](FormFieldPaginationResp.md#fields)
- [runtime](FormFieldPaginationResp.md#runtime)
- [typeName](FormFieldPaginationResp.md#typename)

### Methods

- [clone](FormFieldPaginationResp.md#clone)
- [equals](FormFieldPaginationResp.md#equals)
- [fromBinary](FormFieldPaginationResp.md#frombinary)
- [fromJson](FormFieldPaginationResp.md#fromjson)
- [fromJsonString](FormFieldPaginationResp.md#fromjsonstring)
- [getType](FormFieldPaginationResp.md#gettype)
- [toBinary](FormFieldPaginationResp.md#tobinary)
- [toJSON](FormFieldPaginationResp.md#tojson)
- [toJson](FormFieldPaginationResp.md#tojson-1)
- [toJsonString](FormFieldPaginationResp.md#tojsonstring)
- [equals](FormFieldPaginationResp.md#equals-1)
- [fromBinary](FormFieldPaginationResp.md#frombinary-1)
- [fromJson](FormFieldPaginationResp.md#fromjson-1)
- [fromJsonString](FormFieldPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormFieldPaginationResp**(`data?`): [`FormFieldPaginationResp`](FormFieldPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormFieldPaginationResp`](FormFieldPaginationResp.md)\> |

#### Returns

[`FormFieldPaginationResp`](FormFieldPaginationResp.md)

#### Overrides

Message\&lt;FormFieldPaginationResp\&gt;.constructor

#### Defined in

src/forms_fields.scailo_pb.ts:260

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/forms_fields.scailo_pb.ts:237

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/forms_fields.scailo_pb.ts:244

___

### payload

• **payload**: [`FormField`](FormField.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.FormField payload = 4;

#### Defined in

src/forms_fields.scailo_pb.ts:258

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/forms_fields.scailo_pb.ts:251

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/forms_fields.scailo_pb.ts:267

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/forms_fields.scailo_pb.ts:265

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormFieldPaginationResp"``

#### Defined in

src/forms_fields.scailo_pb.ts:266

## Methods

### clone

▸ **clone**(): [`FormFieldPaginationResp`](FormFieldPaginationResp.md)

Create a deep copy.

#### Returns

[`FormFieldPaginationResp`](FormFieldPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`FormFieldPaginationResp`](FormFieldPaginationResp.md) \| `PlainMessage`\<[`FormFieldPaginationResp`](FormFieldPaginationResp.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormFieldPaginationResp`](FormFieldPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormFieldPaginationResp`](FormFieldPaginationResp.md)\>

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
| `a` | `undefined` \| [`FormFieldPaginationResp`](FormFieldPaginationResp.md) \| `PlainMessage`\<[`FormFieldPaginationResp`](FormFieldPaginationResp.md)\> |
| `b` | `undefined` \| [`FormFieldPaginationResp`](FormFieldPaginationResp.md) \| `PlainMessage`\<[`FormFieldPaginationResp`](FormFieldPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

src/forms_fields.scailo_pb.ts:286

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormFieldPaginationResp`](FormFieldPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormFieldPaginationResp`](FormFieldPaginationResp.md)

#### Defined in

src/forms_fields.scailo_pb.ts:274

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormFieldPaginationResp`](FormFieldPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormFieldPaginationResp`](FormFieldPaginationResp.md)

#### Defined in

src/forms_fields.scailo_pb.ts:278

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormFieldPaginationResp`](FormFieldPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormFieldPaginationResp`](FormFieldPaginationResp.md)

#### Defined in

src/forms_fields.scailo_pb.ts:282
