[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroupsServiceItemUpdateRequest

# Class: TaxGroupsServiceItemUpdateRequest

Describes the parameters required to update a param in a tax group

**`Generated`**

from message Scailo.TaxGroupsServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)\>

  ↳ **`TaxGroupsServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](TaxGroupsServiceItemUpdateRequest.md#constructor)

### Properties

- [description](TaxGroupsServiceItemUpdateRequest.md#description)
- [id](TaxGroupsServiceItemUpdateRequest.md#id)
- [userComment](TaxGroupsServiceItemUpdateRequest.md#usercomment)
- [fields](TaxGroupsServiceItemUpdateRequest.md#fields)
- [runtime](TaxGroupsServiceItemUpdateRequest.md#runtime)
- [typeName](TaxGroupsServiceItemUpdateRequest.md#typename)

### Methods

- [clone](TaxGroupsServiceItemUpdateRequest.md#clone)
- [equals](TaxGroupsServiceItemUpdateRequest.md#equals)
- [fromBinary](TaxGroupsServiceItemUpdateRequest.md#frombinary)
- [fromJson](TaxGroupsServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](TaxGroupsServiceItemUpdateRequest.md#fromjsonstring)
- [getType](TaxGroupsServiceItemUpdateRequest.md#gettype)
- [toBinary](TaxGroupsServiceItemUpdateRequest.md#tobinary)
- [toJSON](TaxGroupsServiceItemUpdateRequest.md#tojson)
- [toJson](TaxGroupsServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](TaxGroupsServiceItemUpdateRequest.md#tojsonstring)
- [equals](TaxGroupsServiceItemUpdateRequest.md#equals-1)
- [fromBinary](TaxGroupsServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](TaxGroupsServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](TaxGroupsServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroupsServiceItemUpdateRequest**(`data?`): [`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)\> |

#### Returns

[`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;TaxGroupsServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/tax_groups.scailo_pb.ts:1137](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1137)

## Properties

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 40;

#### Defined in

[src/tax_groups.scailo_pb.ts:1135](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1135)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/tax_groups.scailo_pb.ts:1128](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1128)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/tax_groups.scailo_pb.ts:1121](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1121)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/tax_groups.scailo_pb.ts:1144](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1144)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/tax_groups.scailo_pb.ts:1142](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1142)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroupsServiceItemUpdateRequest"``

#### Defined in

[src/tax_groups.scailo_pb.ts:1143](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1143)

## Methods

### clone

▸ **clone**(): [`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md) \| `PlainMessage`\<[`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/tax_groups.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1162)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:1150](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1150)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:1154](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1154)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceItemUpdateRequest`](TaxGroupsServiceItemUpdateRequest.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:1158](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L1158)
