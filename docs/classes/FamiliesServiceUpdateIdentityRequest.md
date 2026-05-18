[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceUpdateIdentityRequest

# Class: FamiliesServiceUpdateIdentityRequest

Describes the parameters necessary to update the identity of a family

**`Generated`**

from message Scailo.FamiliesServiceUpdateIdentityRequest

## Hierarchy

- `Message`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\>

  ↳ **`FamiliesServiceUpdateIdentityRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceUpdateIdentityRequest.md#constructor)

### Properties

- [code](FamiliesServiceUpdateIdentityRequest.md#code)
- [familyType](FamiliesServiceUpdateIdentityRequest.md#familytype)
- [id](FamiliesServiceUpdateIdentityRequest.md#id)
- [isLeaf](FamiliesServiceUpdateIdentityRequest.md#isleaf)
- [parentId](FamiliesServiceUpdateIdentityRequest.md#parentid)
- [userComment](FamiliesServiceUpdateIdentityRequest.md#usercomment)
- [fields](FamiliesServiceUpdateIdentityRequest.md#fields)
- [runtime](FamiliesServiceUpdateIdentityRequest.md#runtime)
- [typeName](FamiliesServiceUpdateIdentityRequest.md#typename)

### Methods

- [clone](FamiliesServiceUpdateIdentityRequest.md#clone)
- [equals](FamiliesServiceUpdateIdentityRequest.md#equals)
- [fromBinary](FamiliesServiceUpdateIdentityRequest.md#frombinary)
- [fromJson](FamiliesServiceUpdateIdentityRequest.md#fromjson)
- [fromJsonString](FamiliesServiceUpdateIdentityRequest.md#fromjsonstring)
- [getType](FamiliesServiceUpdateIdentityRequest.md#gettype)
- [toBinary](FamiliesServiceUpdateIdentityRequest.md#tobinary)
- [toJSON](FamiliesServiceUpdateIdentityRequest.md#tojson)
- [toJson](FamiliesServiceUpdateIdentityRequest.md#tojson-1)
- [toJsonString](FamiliesServiceUpdateIdentityRequest.md#tojsonstring)
- [equals](FamiliesServiceUpdateIdentityRequest.md#equals-1)
- [fromBinary](FamiliesServiceUpdateIdentityRequest.md#frombinary-1)
- [fromJson](FamiliesServiceUpdateIdentityRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceUpdateIdentityRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceUpdateIdentityRequest**(`data?`): [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\> |

#### Returns

[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Overrides

Message\&lt;FamiliesServiceUpdateIdentityRequest\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:718](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L718)

## Properties

### code

• **code**: `string` = `""`

The unique code that represents the family (can be updated only prior to the first approval)

**`Generated`**

from field: string code = 12;

#### Defined in

[src/families.scailo_pb.ts:695](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L695)

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The type of the family (can be updated only prior to the first approval)

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 15;

#### Defined in

[src/families.scailo_pb.ts:702](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L702)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/families.scailo_pb.ts:688](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L688)

___

### isLeaf

• **isLeaf**: `boolean` = `false`

Stores if the family is a leaf family (can be updated only prior to the first approval)

**`Generated`**

from field: bool is_leaf = 20;

#### Defined in

[src/families.scailo_pb.ts:716](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L716)

___

### parentId

• **parentId**: `bigint` = `protoInt64.zero`

Stores the ID of the parent family (can be updated only prior to the first approval)

**`Generated`**

from field: uint64 parent_id = 19;

#### Defined in

[src/families.scailo_pb.ts:709](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L709)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/families.scailo_pb.ts:681](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L681)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:725](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L725)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:723](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L723)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceUpdateIdentityRequest"``

#### Defined in

[src/families.scailo_pb.ts:724](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L724)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md) \| `PlainMessage`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md) \| `PlainMessage`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md) \| `PlainMessage`\<[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:746](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L746)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Defined in

[src/families.scailo_pb.ts:734](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L734)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Defined in

[src/families.scailo_pb.ts:738](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L738)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceUpdateIdentityRequest`](FamiliesServiceUpdateIdentityRequest.md)

#### Defined in

[src/families.scailo_pb.ts:742](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/families.scailo_pb.ts#L742)
