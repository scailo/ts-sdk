[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MagicLinkPaginationResp

# Class: MagicLinkPaginationResp

Describes the data structure that responds to a pagination request

**`Generated`**

from message Scailo.MagicLinkPaginationResp

## Hierarchy

- `Message`\<[`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)\>

  ↳ **`MagicLinkPaginationResp`**

## Table of contents

### Constructors

- [constructor](MagicLinkPaginationResp.md#constructor)

### Properties

- [count](MagicLinkPaginationResp.md#count)
- [offset](MagicLinkPaginationResp.md#offset)
- [payload](MagicLinkPaginationResp.md#payload)
- [total](MagicLinkPaginationResp.md#total)
- [fields](MagicLinkPaginationResp.md#fields)
- [runtime](MagicLinkPaginationResp.md#runtime)
- [typeName](MagicLinkPaginationResp.md#typename)

### Methods

- [clone](MagicLinkPaginationResp.md#clone)
- [equals](MagicLinkPaginationResp.md#equals)
- [fromBinary](MagicLinkPaginationResp.md#frombinary)
- [fromJson](MagicLinkPaginationResp.md#fromjson)
- [fromJsonString](MagicLinkPaginationResp.md#fromjsonstring)
- [getType](MagicLinkPaginationResp.md#gettype)
- [toBinary](MagicLinkPaginationResp.md#tobinary)
- [toJSON](MagicLinkPaginationResp.md#tojson)
- [toJson](MagicLinkPaginationResp.md#tojson-1)
- [toJsonString](MagicLinkPaginationResp.md#tojsonstring)
- [equals](MagicLinkPaginationResp.md#equals-1)
- [fromBinary](MagicLinkPaginationResp.md#frombinary-1)
- [fromJson](MagicLinkPaginationResp.md#fromjson-1)
- [fromJsonString](MagicLinkPaginationResp.md#fromjsonstring-1)

## Constructors

### constructor

• **new MagicLinkPaginationResp**(`data?`): [`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)\> |

#### Returns

[`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)

#### Overrides

Message\&lt;MagicLinkPaginationResp\&gt;.constructor

#### Defined in

src/magic_links.scailo_pb.ts:663

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/magic_links.scailo_pb.ts:640

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/magic_links.scailo_pb.ts:647

___

### payload

• **payload**: [`MagicLink`](MagicLink.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.MagicLink payload = 4;

#### Defined in

src/magic_links.scailo_pb.ts:661

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/magic_links.scailo_pb.ts:654

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/magic_links.scailo_pb.ts:670

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/magic_links.scailo_pb.ts:668

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MagicLinkPaginationResp"``

#### Defined in

src/magic_links.scailo_pb.ts:669

## Methods

### clone

▸ **clone**(): [`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)

Create a deep copy.

#### Returns

[`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)

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
| `other` | `undefined` \| ``null`` \| [`MagicLinkPaginationResp`](MagicLinkPaginationResp.md) \| `PlainMessage`\<[`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)\> |

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

▸ **getType**(): `MessageType`\<[`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)\>

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
| `a` | `undefined` \| [`MagicLinkPaginationResp`](MagicLinkPaginationResp.md) \| `PlainMessage`\<[`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)\> |
| `b` | `undefined` \| [`MagicLinkPaginationResp`](MagicLinkPaginationResp.md) \| `PlainMessage`\<[`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)\> |

#### Returns

`boolean`

#### Defined in

src/magic_links.scailo_pb.ts:689

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)

#### Defined in

src/magic_links.scailo_pb.ts:677

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)

#### Defined in

src/magic_links.scailo_pb.ts:681

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinkPaginationResp`](MagicLinkPaginationResp.md)

#### Defined in

src/magic_links.scailo_pb.ts:685
