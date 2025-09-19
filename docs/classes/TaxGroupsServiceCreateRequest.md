[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroupsServiceCreateRequest

# Class: TaxGroupsServiceCreateRequest

Describes the groups necessary to create a record

**`Generated`**

from message Scailo.TaxGroupsServiceCreateRequest

## Hierarchy

- `Message`\<[`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)\>

  ↳ **`TaxGroupsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](TaxGroupsServiceCreateRequest.md#constructor)

### Properties

- [category](TaxGroupsServiceCreateRequest.md#category)
- [code](TaxGroupsServiceCreateRequest.md#code)
- [description](TaxGroupsServiceCreateRequest.md#description)
- [entityUuid](TaxGroupsServiceCreateRequest.md#entityuuid)
- [name](TaxGroupsServiceCreateRequest.md#name)
- [userComment](TaxGroupsServiceCreateRequest.md#usercomment)
- [fields](TaxGroupsServiceCreateRequest.md#fields)
- [runtime](TaxGroupsServiceCreateRequest.md#runtime)
- [typeName](TaxGroupsServiceCreateRequest.md#typename)

### Methods

- [clone](TaxGroupsServiceCreateRequest.md#clone)
- [equals](TaxGroupsServiceCreateRequest.md#equals)
- [fromBinary](TaxGroupsServiceCreateRequest.md#frombinary)
- [fromJson](TaxGroupsServiceCreateRequest.md#fromjson)
- [fromJsonString](TaxGroupsServiceCreateRequest.md#fromjsonstring)
- [getType](TaxGroupsServiceCreateRequest.md#gettype)
- [toBinary](TaxGroupsServiceCreateRequest.md#tobinary)
- [toJSON](TaxGroupsServiceCreateRequest.md#tojson)
- [toJson](TaxGroupsServiceCreateRequest.md#tojson-1)
- [toJsonString](TaxGroupsServiceCreateRequest.md#tojsonstring)
- [equals](TaxGroupsServiceCreateRequest.md#equals-1)
- [fromBinary](TaxGroupsServiceCreateRequest.md#frombinary-1)
- [fromJson](TaxGroupsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](TaxGroupsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroupsServiceCreateRequest**(`data?`): [`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)\> |

#### Returns

[`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)

#### Overrides

Message\&lt;TaxGroupsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/tax_groups.scailo_pb.ts:178](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L178)

## Properties

### category

• **category**: [`TAX_GROUP_CATEGORY`](../enums/TAX_GROUP_CATEGORY.md) = `TAX_GROUP_CATEGORY.TAX_GROUP_CATEGORY_ANY_UNSPECIFIED`

The category of the tax group

**`Generated`**

from field: Scailo.TAX_GROUP_CATEGORY category = 11;

#### Defined in

[src/tax_groups.scailo_pb.ts:169](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L169)

___

### code

• **code**: `string` = `""`

The unique code by which the tax group is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/tax_groups.scailo_pb.ts:162](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L162)

___

### description

• **description**: `string` = `""`

The description of the tax group

**`Generated`**

from field: string description = 12;

#### Defined in

[src/tax_groups.scailo_pb.ts:176](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L176)

___

### entityUuid

• **entityUuid**: `string` = `""`

TaxGroups a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/tax_groups.scailo_pb.ts:141](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L141)

___

### name

• **name**: `string` = `""`

The name of the tax group

**`Generated`**

from field: string name = 10;

#### Defined in

[src/tax_groups.scailo_pb.ts:155](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L155)

___

### userComment

• **userComment**: `string` = `""`

TaxGroups any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/tax_groups.scailo_pb.ts:148](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L148)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/tax_groups.scailo_pb.ts:185](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L185)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/tax_groups.scailo_pb.ts:183](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L183)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroupsServiceCreateRequest"``

#### Defined in

[src/tax_groups.scailo_pb.ts:184](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L184)

## Methods

### clone

▸ **clone**(): [`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md) \| `PlainMessage`\<[`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/tax_groups.scailo_pb.ts:206](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L206)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:194](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L194)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:198](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L198)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceCreateRequest`](TaxGroupsServiceCreateRequest.md)

#### Defined in

[src/tax_groups.scailo_pb.ts:202](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/tax_groups.scailo_pb.ts#L202)
