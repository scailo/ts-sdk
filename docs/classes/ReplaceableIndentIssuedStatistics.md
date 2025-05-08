[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentIssuedStatistics

# Class: ReplaceableIndentIssuedStatistics

Describes the issued statistics of the replaceable indent

**`Generated`**

from message Scailo.ReplaceableIndentIssuedStatistics

## Hierarchy

- `Message`\<[`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)\>

  ↳ **`ReplaceableIndentIssuedStatistics`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentIssuedStatistics.md#constructor)

### Properties

- [approvedIssuedQuantity](ReplaceableIndentIssuedStatistics.md#approvedissuedquantity)
- [familyId](ReplaceableIndentIssuedStatistics.md#familyid)
- [indentedQuantity](ReplaceableIndentIssuedStatistics.md#indentedquantity)
- [unapprovedIssuedQuantity](ReplaceableIndentIssuedStatistics.md#unapprovedissuedquantity)
- [fields](ReplaceableIndentIssuedStatistics.md#fields)
- [runtime](ReplaceableIndentIssuedStatistics.md#runtime)
- [typeName](ReplaceableIndentIssuedStatistics.md#typename)

### Methods

- [clone](ReplaceableIndentIssuedStatistics.md#clone)
- [equals](ReplaceableIndentIssuedStatistics.md#equals)
- [fromBinary](ReplaceableIndentIssuedStatistics.md#frombinary)
- [fromJson](ReplaceableIndentIssuedStatistics.md#fromjson)
- [fromJsonString](ReplaceableIndentIssuedStatistics.md#fromjsonstring)
- [getType](ReplaceableIndentIssuedStatistics.md#gettype)
- [toBinary](ReplaceableIndentIssuedStatistics.md#tobinary)
- [toJSON](ReplaceableIndentIssuedStatistics.md#tojson)
- [toJson](ReplaceableIndentIssuedStatistics.md#tojson-1)
- [toJsonString](ReplaceableIndentIssuedStatistics.md#tojsonstring)
- [equals](ReplaceableIndentIssuedStatistics.md#equals-1)
- [fromBinary](ReplaceableIndentIssuedStatistics.md#frombinary-1)
- [fromJson](ReplaceableIndentIssuedStatistics.md#fromjson-1)
- [fromJsonString](ReplaceableIndentIssuedStatistics.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentIssuedStatistics**(`data?`): [`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)\> |

#### Returns

[`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)

#### Overrides

Message\&lt;ReplaceableIndentIssuedStatistics\&gt;.constructor

#### Defined in

src/replaceable_indents.scailo_pb.ts:1995

## Properties

### approvedIssuedQuantity

• **approvedIssuedQuantity**: `bigint` = `protoInt64.zero`

Stores the approved issued quantity

**`Generated`**

from field: uint64 approved_issued_quantity = 4;

#### Defined in

src/replaceable_indents.scailo_pb.ts:1993

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family

**`Generated`**

from field: uint64 family_id = 1;

#### Defined in

src/replaceable_indents.scailo_pb.ts:1972

___

### indentedQuantity

• **indentedQuantity**: `bigint` = `protoInt64.zero`

Stores the indented quantity

**`Generated`**

from field: uint64 indented_quantity = 2;

#### Defined in

src/replaceable_indents.scailo_pb.ts:1979

___

### unapprovedIssuedQuantity

• **unapprovedIssuedQuantity**: `bigint` = `protoInt64.zero`

Stores the unapproved issued quantity

**`Generated`**

from field: uint64 unapproved_issued_quantity = 3;

#### Defined in

src/replaceable_indents.scailo_pb.ts:1986

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/replaceable_indents.scailo_pb.ts:2002

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/replaceable_indents.scailo_pb.ts:2000

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentIssuedStatistics"``

#### Defined in

src/replaceable_indents.scailo_pb.ts:2001

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md) \| `PlainMessage`\<[`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md) \| `PlainMessage`\<[`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md) \| `PlainMessage`\<[`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)\> |

#### Returns

`boolean`

#### Defined in

src/replaceable_indents.scailo_pb.ts:2021

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:2009

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:2013

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentIssuedStatistics`](ReplaceableIndentIssuedStatistics.md)

#### Defined in

src/replaceable_indents.scailo_pb.ts:2017
