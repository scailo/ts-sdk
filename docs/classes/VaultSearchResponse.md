[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VaultSearchResponse

# Class: VaultSearchResponse

Describes the search information of vault files and folders into a single message

**`Generated`**

from message Scailo.VaultSearchResponse

## Hierarchy

- `Message`\<[`VaultSearchResponse`](VaultSearchResponse.md)\>

  ↳ **`VaultSearchResponse`**

## Table of contents

### Constructors

- [constructor](VaultSearchResponse.md#constructor)

### Properties

- [elementId](VaultSearchResponse.md#elementid)
- [elementUuid](VaultSearchResponse.md#elementuuid)
- [name](VaultSearchResponse.md#name)
- [parentFolderUuid](VaultSearchResponse.md#parentfolderuuid)
- [path](VaultSearchResponse.md#path)
- [type](VaultSearchResponse.md#type)
- [fields](VaultSearchResponse.md#fields)
- [runtime](VaultSearchResponse.md#runtime)
- [typeName](VaultSearchResponse.md#typename)

### Methods

- [clone](VaultSearchResponse.md#clone)
- [equals](VaultSearchResponse.md#equals)
- [fromBinary](VaultSearchResponse.md#frombinary)
- [fromJson](VaultSearchResponse.md#fromjson)
- [fromJsonString](VaultSearchResponse.md#fromjsonstring)
- [getType](VaultSearchResponse.md#gettype)
- [toBinary](VaultSearchResponse.md#tobinary)
- [toJSON](VaultSearchResponse.md#tojson)
- [toJson](VaultSearchResponse.md#tojson-1)
- [toJsonString](VaultSearchResponse.md#tojsonstring)
- [equals](VaultSearchResponse.md#equals-1)
- [fromBinary](VaultSearchResponse.md#frombinary-1)
- [fromJson](VaultSearchResponse.md#fromjson-1)
- [fromJsonString](VaultSearchResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new VaultSearchResponse**(`data?`): [`VaultSearchResponse`](VaultSearchResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VaultSearchResponse`](VaultSearchResponse.md)\> |

#### Returns

[`VaultSearchResponse`](VaultSearchResponse.md)

#### Overrides

Message\&lt;VaultSearchResponse\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:1193](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1193)

## Properties

### elementId

• **elementId**: `bigint` = `protoInt64.zero`

The ID of the element

**`Generated`**

from field: uint64 element_id = 3;

#### Defined in

[src/vault_commons.scailo_pb.ts:1170](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1170)

___

### elementUuid

• **elementUuid**: `string` = `""`

The UUID of the element

**`Generated`**

from field: string element_uuid = 4;

#### Defined in

[src/vault_commons.scailo_pb.ts:1177](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1177)

___

### name

• **name**: `string` = `""`

The search name

**`Generated`**

from field: string name = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:1156](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1156)

___

### parentFolderUuid

• **parentFolderUuid**: `string` = `""`

The link to the parent folder

**`Generated`**

from field: string parent_folder_uuid = 6;

#### Defined in

[src/vault_commons.scailo_pb.ts:1191](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1191)

___

### path

• **path**: `string` = `""`

The full path of the folder or the file

**`Generated`**

from field: string path = 5;

#### Defined in

[src/vault_commons.scailo_pb.ts:1184](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1184)

___

### type

• **type**: [`VAULT_REF_FOR`](../enums/VAULT_REF_FOR.md) = `VAULT_REF_FOR.VAULT_REF_FOR_ANY_UNSPECIFIED`

The type of the file

**`Generated`**

from field: Scailo.VAULT_REF_FOR type = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:1163](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1163)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:1200](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1200)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:1198](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1198)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VaultSearchResponse"``

#### Defined in

[src/vault_commons.scailo_pb.ts:1199](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1199)

## Methods

### clone

▸ **clone**(): [`VaultSearchResponse`](VaultSearchResponse.md)

Create a deep copy.

#### Returns

[`VaultSearchResponse`](VaultSearchResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`VaultSearchResponse`](VaultSearchResponse.md) \| `PlainMessage`\<[`VaultSearchResponse`](VaultSearchResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`VaultSearchResponse`](VaultSearchResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VaultSearchResponse`](VaultSearchResponse.md)\>

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
| `a` | `undefined` \| [`VaultSearchResponse`](VaultSearchResponse.md) \| `PlainMessage`\<[`VaultSearchResponse`](VaultSearchResponse.md)\> |
| `b` | `undefined` \| [`VaultSearchResponse`](VaultSearchResponse.md) \| `PlainMessage`\<[`VaultSearchResponse`](VaultSearchResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:1221](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1221)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VaultSearchResponse`](VaultSearchResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VaultSearchResponse`](VaultSearchResponse.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1209](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1209)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VaultSearchResponse`](VaultSearchResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultSearchResponse`](VaultSearchResponse.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1213)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VaultSearchResponse`](VaultSearchResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VaultSearchResponse`](VaultSearchResponse.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:1217](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L1217)
