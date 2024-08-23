[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroupsServiceItemCreateRequest

# Class: TaxGroupsServiceItemCreateRequest

Describes the parameters required to add a param to a tax group

**`Generated`**

from message Scailo.TaxGroupsServiceItemCreateRequest

## Hierarchy

- `Message`\<[`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)\>

  ↳ **`TaxGroupsServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](TaxGroupsServiceItemCreateRequest.md#constructor)

### Properties

- [description](TaxGroupsServiceItemCreateRequest.md#description)
- [taxGroupId](TaxGroupsServiceItemCreateRequest.md#taxgroupid)
- [taxParamId](TaxGroupsServiceItemCreateRequest.md#taxparamid)
- [userComment](TaxGroupsServiceItemCreateRequest.md#usercomment)
- [fields](TaxGroupsServiceItemCreateRequest.md#fields)
- [runtime](TaxGroupsServiceItemCreateRequest.md#runtime)
- [typeName](TaxGroupsServiceItemCreateRequest.md#typename)

### Methods

- [clone](TaxGroupsServiceItemCreateRequest.md#clone)
- [equals](TaxGroupsServiceItemCreateRequest.md#equals)
- [fromBinary](TaxGroupsServiceItemCreateRequest.md#frombinary)
- [fromJson](TaxGroupsServiceItemCreateRequest.md#fromjson)
- [fromJsonString](TaxGroupsServiceItemCreateRequest.md#fromjsonstring)
- [getType](TaxGroupsServiceItemCreateRequest.md#gettype)
- [toBinary](TaxGroupsServiceItemCreateRequest.md#tobinary)
- [toJSON](TaxGroupsServiceItemCreateRequest.md#tojson)
- [toJson](TaxGroupsServiceItemCreateRequest.md#tojson-1)
- [toJsonString](TaxGroupsServiceItemCreateRequest.md#tojsonstring)
- [equals](TaxGroupsServiceItemCreateRequest.md#equals-1)
- [fromBinary](TaxGroupsServiceItemCreateRequest.md#frombinary-1)
- [fromJson](TaxGroupsServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](TaxGroupsServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroupsServiceItemCreateRequest**(`data?`): [`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)\> |

#### Returns

[`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)

#### Overrides

Message\&lt;TaxGroupsServiceItemCreateRequest\&gt;.constructor

#### Defined in

src/tax_groups.scailo_pb.ts:1030

## Properties

### description

• **description**: `string` = `""`

An optional description

**`Generated`**

from field: string description = 40;

#### Defined in

src/tax_groups.scailo_pb.ts:1028

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

Stores the ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 10;

#### Defined in

src/tax_groups.scailo_pb.ts:1014

___

### taxParamId

• **taxParamId**: `bigint` = `protoInt64.zero`

The ID of the tax param that is a part of the tax group

**`Generated`**

from field: uint64 tax_param_id = 11;

#### Defined in

src/tax_groups.scailo_pb.ts:1021

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/tax_groups.scailo_pb.ts:1007

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/tax_groups.scailo_pb.ts:1037

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/tax_groups.scailo_pb.ts:1035

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroupsServiceItemCreateRequest"``

#### Defined in

src/tax_groups.scailo_pb.ts:1036

## Methods

### clone

▸ **clone**(): [`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md) \| `PlainMessage`\<[`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md) \| `PlainMessage`\<[`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md) \| `PlainMessage`\<[`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/tax_groups.scailo_pb.ts:1056

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)

#### Defined in

src/tax_groups.scailo_pb.ts:1044

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)

#### Defined in

src/tax_groups.scailo_pb.ts:1048

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceItemCreateRequest`](TaxGroupsServiceItemCreateRequest.md)

#### Defined in

src/tax_groups.scailo_pb.ts:1052
