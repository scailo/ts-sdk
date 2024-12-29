[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroupsServiceUpdateRequest

# Class: TaxGroupsServiceUpdateRequest

Describes the groups necessary to update a record

**`Generated`**

from message Scailo.TaxGroupsServiceUpdateRequest

## Hierarchy

- `Message`\<[`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)\>

  ↳ **`TaxGroupsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](TaxGroupsServiceUpdateRequest.md#constructor)

### Properties

- [code](TaxGroupsServiceUpdateRequest.md#code)
- [description](TaxGroupsServiceUpdateRequest.md#description)
- [id](TaxGroupsServiceUpdateRequest.md#id)
- [name](TaxGroupsServiceUpdateRequest.md#name)
- [notifyUsers](TaxGroupsServiceUpdateRequest.md#notifyusers)
- [userComment](TaxGroupsServiceUpdateRequest.md#usercomment)
- [fields](TaxGroupsServiceUpdateRequest.md#fields)
- [runtime](TaxGroupsServiceUpdateRequest.md#runtime)
- [typeName](TaxGroupsServiceUpdateRequest.md#typename)

### Methods

- [clone](TaxGroupsServiceUpdateRequest.md#clone)
- [equals](TaxGroupsServiceUpdateRequest.md#equals)
- [fromBinary](TaxGroupsServiceUpdateRequest.md#frombinary)
- [fromJson](TaxGroupsServiceUpdateRequest.md#fromjson)
- [fromJsonString](TaxGroupsServiceUpdateRequest.md#fromjsonstring)
- [getType](TaxGroupsServiceUpdateRequest.md#gettype)
- [toBinary](TaxGroupsServiceUpdateRequest.md#tobinary)
- [toJSON](TaxGroupsServiceUpdateRequest.md#tojson)
- [toJson](TaxGroupsServiceUpdateRequest.md#tojson-1)
- [toJsonString](TaxGroupsServiceUpdateRequest.md#tojsonstring)
- [equals](TaxGroupsServiceUpdateRequest.md#equals-1)
- [fromBinary](TaxGroupsServiceUpdateRequest.md#frombinary-1)
- [fromJson](TaxGroupsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](TaxGroupsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroupsServiceUpdateRequest**(`data?`): [`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)\> |

#### Returns

[`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)

#### Overrides

Message\&lt;TaxGroupsServiceUpdateRequest\&gt;.constructor

#### Defined in

src/tax_groups.scailo_pb.ts:260

## Properties

### code

• **code**: `string` = `""`

The unique code by which the tax group is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/tax_groups.scailo_pb.ts:251

___

### description

• **description**: `string` = `""`

The description of the tax group

**`Generated`**

from field: string description = 12;

#### Defined in

src/tax_groups.scailo_pb.ts:258

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/tax_groups.scailo_pb.ts:230

___

### name

• **name**: `string` = `""`

The name of the tax group

**`Generated`**

from field: string name = 10;

#### Defined in

src/tax_groups.scailo_pb.ts:244

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

Optional boolean value that denotes if a notification needs to be sent to users about the update to the record. This is useful when a subsequent operation needs to be performed immediately (such as send to verification after updating the revision)

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

src/tax_groups.scailo_pb.ts:237

___

### userComment

• **userComment**: `string` = `""`

TaxGroups any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/tax_groups.scailo_pb.ts:223

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/tax_groups.scailo_pb.ts:267

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/tax_groups.scailo_pb.ts:265

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroupsServiceUpdateRequest"``

#### Defined in

src/tax_groups.scailo_pb.ts:266

## Methods

### clone

▸ **clone**(): [`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md) \| `PlainMessage`\<[`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/tax_groups.scailo_pb.ts:288

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)

#### Defined in

src/tax_groups.scailo_pb.ts:276

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)

#### Defined in

src/tax_groups.scailo_pb.ts:280

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceUpdateRequest`](TaxGroupsServiceUpdateRequest.md)

#### Defined in

src/tax_groups.scailo_pb.ts:284
