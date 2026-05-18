[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / RolesServiceUpdateRequest

# Class: RolesServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.RolesServiceUpdateRequest

## Hierarchy

- `Message`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\>

  ↳ **`RolesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](RolesServiceUpdateRequest.md#constructor)

### Properties

- [accessList](RolesServiceUpdateRequest.md#accesslist)
- [code](RolesServiceUpdateRequest.md#code)
- [description](RolesServiceUpdateRequest.md#description)
- [httpAccess](RolesServiceUpdateRequest.md#httpaccess)
- [httpsAccess](RolesServiceUpdateRequest.md#httpsaccess)
- [id](RolesServiceUpdateRequest.md#id)
- [name](RolesServiceUpdateRequest.md#name)
- [notifyUsers](RolesServiceUpdateRequest.md#notifyusers)
- [userComment](RolesServiceUpdateRequest.md#usercomment)
- [vaultAccess](RolesServiceUpdateRequest.md#vaultaccess)
- [vaultRootFolderInteractions](RolesServiceUpdateRequest.md#vaultrootfolderinteractions)
- [fields](RolesServiceUpdateRequest.md#fields)
- [runtime](RolesServiceUpdateRequest.md#runtime)
- [typeName](RolesServiceUpdateRequest.md#typename)

### Methods

- [clone](RolesServiceUpdateRequest.md#clone)
- [equals](RolesServiceUpdateRequest.md#equals)
- [fromBinary](RolesServiceUpdateRequest.md#frombinary)
- [fromJson](RolesServiceUpdateRequest.md#fromjson)
- [fromJsonString](RolesServiceUpdateRequest.md#fromjsonstring)
- [getType](RolesServiceUpdateRequest.md#gettype)
- [toBinary](RolesServiceUpdateRequest.md#tobinary)
- [toJSON](RolesServiceUpdateRequest.md#tojson)
- [toJson](RolesServiceUpdateRequest.md#tojson-1)
- [toJsonString](RolesServiceUpdateRequest.md#tojsonstring)
- [equals](RolesServiceUpdateRequest.md#equals-1)
- [fromBinary](RolesServiceUpdateRequest.md#frombinary-1)
- [fromJson](RolesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](RolesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new RolesServiceUpdateRequest**(`data?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Overrides

Message\&lt;RolesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/roles.scailo_pb.ts:305](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L305)

## Properties

### accessList

• **accessList**: [`RolesServiceAccessCreateAndUpdateRequest`](RolesServiceAccessCreateAndUpdateRequest.md)[] = `[]`

The list of accessible menu UIDs

**`Generated`**

from field: repeated Scailo.RolesServiceAccessCreateAndUpdateRequest access_list = 20;

#### Defined in

[src/roles.scailo_pb.ts:303](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L303)

___

### code

• **code**: `string` = `""`

The code of the role

**`Generated`**

from field: string code = 11;

#### Defined in

[src/roles.scailo_pb.ts:261](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L261)

___

### description

• **description**: `string` = `""`

The description of the role

**`Generated`**

from field: string description = 12;

#### Defined in

[src/roles.scailo_pb.ts:268](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L268)

___

### httpAccess

• **httpAccess**: `boolean` = `false`

Stores if the role has access via HTTP (or within local network)

**`Generated`**

from field: bool http_access = 15;

#### Defined in

[src/roles.scailo_pb.ts:289](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L289)

___

### httpsAccess

• **httpsAccess**: `boolean` = `false`

Stores if the role has access via HTTPS (or through a public FQDN)

**`Generated`**

from field: bool https_access = 16;

#### Defined in

[src/roles.scailo_pb.ts:296](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L296)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/roles.scailo_pb.ts:235](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L235)

___

### name

• **name**: `string` = `""`

The name of the role

**`Generated`**

from field: string name = 10;

#### Defined in

[src/roles.scailo_pb.ts:254](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L254)

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

[src/roles.scailo_pb.ts:247](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L247)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/roles.scailo_pb.ts:228](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L228)

___

### vaultAccess

• **vaultAccess**: `boolean` = `false`

Stores if this role has access to Vault

**`Generated`**

from field: bool vault_access = 13;

#### Defined in

[src/roles.scailo_pb.ts:275](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L275)

___

### vaultRootFolderInteractions

• **vaultRootFolderInteractions**: `boolean` = `false`

Stores if the role has access to perform operations on the root folder in Vault

**`Generated`**

from field: bool vault_root_folder_interactions = 14;

#### Defined in

[src/roles.scailo_pb.ts:282](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L282)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/roles.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L312)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/roles.scailo_pb.ts:310](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L310)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.RolesServiceUpdateRequest"``

#### Defined in

[src/roles.scailo_pb.ts:311](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L311)

## Methods

### clone

▸ **clone**(): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md) \| `PlainMessage`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md) \| `PlainMessage`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md) \| `PlainMessage`\<[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/roles.scailo_pb.ts:338](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L338)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Defined in

[src/roles.scailo_pb.ts:326](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L326)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Defined in

[src/roles.scailo_pb.ts:330](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L330)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`RolesServiceUpdateRequest`](RolesServiceUpdateRequest.md)

#### Defined in

[src/roles.scailo_pb.ts:334](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/roles.scailo_pb.ts#L334)
