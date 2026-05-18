[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServiceUpdateRequest

# Class: ProductionIndentsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.ProductionIndentsServiceUpdateRequest

## Hierarchy

- `Message`\<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\>

  ↳ **`ProductionIndentsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServiceUpdateRequest.md#constructor)

### Properties

- [formData](ProductionIndentsServiceUpdateRequest.md#formdata)
- [id](ProductionIndentsServiceUpdateRequest.md#id)
- [notifyUsers](ProductionIndentsServiceUpdateRequest.md#notifyusers)
- [referenceId](ProductionIndentsServiceUpdateRequest.md#referenceid)
- [supervisor](ProductionIndentsServiceUpdateRequest.md#supervisor)
- [userComment](ProductionIndentsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](ProductionIndentsServiceUpdateRequest.md#vaultfolderid)
- [fields](ProductionIndentsServiceUpdateRequest.md#fields)
- [runtime](ProductionIndentsServiceUpdateRequest.md#runtime)
- [typeName](ProductionIndentsServiceUpdateRequest.md#typename)

### Methods

- [clone](ProductionIndentsServiceUpdateRequest.md#clone)
- [equals](ProductionIndentsServiceUpdateRequest.md#equals)
- [fromBinary](ProductionIndentsServiceUpdateRequest.md#frombinary)
- [fromJson](ProductionIndentsServiceUpdateRequest.md#fromjson)
- [fromJsonString](ProductionIndentsServiceUpdateRequest.md#fromjsonstring)
- [getType](ProductionIndentsServiceUpdateRequest.md#gettype)
- [toBinary](ProductionIndentsServiceUpdateRequest.md#tobinary)
- [toJSON](ProductionIndentsServiceUpdateRequest.md#tojson)
- [toJson](ProductionIndentsServiceUpdateRequest.md#tojson-1)
- [toJsonString](ProductionIndentsServiceUpdateRequest.md#tojsonstring)
- [equals](ProductionIndentsServiceUpdateRequest.md#equals-1)
- [fromBinary](ProductionIndentsServiceUpdateRequest.md#frombinary-1)
- [fromJson](ProductionIndentsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ProductionIndentsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServiceUpdateRequest**(`data?`): [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\> |

#### Returns

[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Overrides

Message\&lt;ProductionIndentsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/production_indents.scailo_pb.ts:518](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L518)

## Properties

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/production_indents.scailo_pb.ts:516](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L516)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/production_indents.scailo_pb.ts:458](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L458)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/production_indents.scailo_pb.ts:470](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L470)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/production_indents.scailo_pb.ts:502](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L502)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 15;

#### Defined in

[src/production_indents.scailo_pb.ts:509](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L509)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/production_indents.scailo_pb.ts:451](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L451)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/production_indents.scailo_pb.ts:486](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L486)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L525)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents.scailo_pb.ts:523](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L523)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentsServiceUpdateRequest"``

#### Defined in

[src/production_indents.scailo_pb.ts:524](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L524)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md) \| `PlainMessage`\<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md) \| `PlainMessage`\<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md) \| `PlainMessage`\<[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L547)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Defined in

[src/production_indents.scailo_pb.ts:535](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L535)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Defined in

[src/production_indents.scailo_pb.ts:539](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L539)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServiceUpdateRequest`](ProductionIndentsServiceUpdateRequest.md)

#### Defined in

[src/production_indents.scailo_pb.ts:543](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/production_indents.scailo_pb.ts#L543)
