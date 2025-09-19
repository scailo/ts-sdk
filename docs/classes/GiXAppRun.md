[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GiXAppRun

# Class: GiXAppRun

Describes the parameters that are a part of each vault app execution (GiX app execution)

**`Generated`**

from message Scailo.GiXAppRun

## Hierarchy

- `Message`\<[`GiXAppRun`](GiXAppRun.md)\>

  ↳ **`GiXAppRun`**

## Table of contents

### Constructors

- [constructor](GiXAppRun.md#constructor)

### Properties

- [appEndpoint](GiXAppRun.md#appendpoint)
- [appName](GiXAppRun.md#appname)
- [appUniqueIdentifier](GiXAppRun.md#appuniqueidentifier)
- [appVersion](GiXAppRun.md#appversion)
- [entityUuid](GiXAppRun.md#entityuuid)
- [extractedPath](GiXAppRun.md#extractedpath)
- [ipAddr](GiXAppRun.md#ipaddr)
- [manifest](GiXAppRun.md#manifest)
- [metadata](GiXAppRun.md#metadata)
- [runBy](GiXAppRun.md#runby)
- [vaultFileId](GiXAppRun.md#vaultfileid)
- [vaultFileVersionId](GiXAppRun.md#vaultfileversionid)
- [fields](GiXAppRun.md#fields)
- [runtime](GiXAppRun.md#runtime)
- [typeName](GiXAppRun.md#typename)

### Methods

- [clone](GiXAppRun.md#clone)
- [equals](GiXAppRun.md#equals)
- [fromBinary](GiXAppRun.md#frombinary)
- [fromJson](GiXAppRun.md#fromjson)
- [fromJsonString](GiXAppRun.md#fromjsonstring)
- [getType](GiXAppRun.md#gettype)
- [toBinary](GiXAppRun.md#tobinary)
- [toJSON](GiXAppRun.md#tojson)
- [toJson](GiXAppRun.md#tojson-1)
- [toJsonString](GiXAppRun.md#tojsonstring)
- [equals](GiXAppRun.md#equals-1)
- [fromBinary](GiXAppRun.md#frombinary-1)
- [fromJson](GiXAppRun.md#fromjson-1)
- [fromJsonString](GiXAppRun.md#fromjsonstring-1)

## Constructors

### constructor

• **new GiXAppRun**(`data?`): [`GiXAppRun`](GiXAppRun.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GiXAppRun`](GiXAppRun.md)\> |

#### Returns

[`GiXAppRun`](GiXAppRun.md)

#### Overrides

Message\&lt;GiXAppRun\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:707](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L707)

## Properties

### appEndpoint

• **appEndpoint**: `string` = `""`

Stores the endpoint of the application execution

**`Generated`**

from field: string app_endpoint = 40;

#### Defined in

[src/vault_commons.scailo_pb.ts:705](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L705)

___

### appName

• **appName**: `string` = `""`

Stores the name of the application

**`Generated`**

from field: string app_name = 31;

#### Defined in

[src/vault_commons.scailo_pb.ts:698](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L698)

___

### appUniqueIdentifier

• **appUniqueIdentifier**: `string` = `""`

Stores the unique identifier of the application

**`Generated`**

from field: string app_unique_identifier = 12;

#### Defined in

[src/vault_commons.scailo_pb.ts:656](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L656)

___

### appVersion

• **appVersion**: `string` = `""`

Stores the application version

**`Generated`**

from field: string app_version = 30;

#### Defined in

[src/vault_commons.scailo_pb.ts:691](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L691)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/vault_commons.scailo_pb.ts:628](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L628)

___

### extractedPath

• **extractedPath**: `string` = `""`

Stores the path of the extracted file on disk, from where static files will be served

**`Generated`**

from field: string extracted_path = 13;

#### Defined in

[src/vault_commons.scailo_pb.ts:663](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L663)

___

### ipAddr

• **ipAddr**: `string` = `""`

Stores the IP address from where the app was executed

**`Generated`**

from field: string ip_addr = 14;

#### Defined in

[src/vault_commons.scailo_pb.ts:670](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L670)

___

### manifest

• `Optional` **manifest**: [`GiXManifest`](GiXManifest.md)

Stores the manifest of the GiX app

**`Generated`**

from field: Scailo.GiXManifest manifest = 15;

#### Defined in

[src/vault_commons.scailo_pb.ts:677](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L677)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this user

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/vault_commons.scailo_pb.ts:635](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L635)

___

### runBy

• **runBy**: `string` = `""`

Stores the username of the user who is running the app

**`Generated`**

from field: string run_by = 16;

#### Defined in

[src/vault_commons.scailo_pb.ts:684](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L684)

___

### vaultFileId

• **vaultFileId**: `bigint` = `protoInt64.zero`

Stores the ID of the file that is being executed

**`Generated`**

from field: uint64 vault_file_id = 10;

#### Defined in

[src/vault_commons.scailo_pb.ts:642](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L642)

___

### vaultFileVersionId

• **vaultFileVersionId**: `bigint` = `protoInt64.zero`

Stores the ID of the version of the file that is being executed

**`Generated`**

from field: uint64 vault_file_version_id = 11;

#### Defined in

[src/vault_commons.scailo_pb.ts:649](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L649)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:714](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L714)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:712](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L712)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GiXAppRun"``

#### Defined in

[src/vault_commons.scailo_pb.ts:713](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L713)

## Methods

### clone

▸ **clone**(): [`GiXAppRun`](GiXAppRun.md)

Create a deep copy.

#### Returns

[`GiXAppRun`](GiXAppRun.md)

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
| `other` | `undefined` \| ``null`` \| [`GiXAppRun`](GiXAppRun.md) \| `PlainMessage`\<[`GiXAppRun`](GiXAppRun.md)\> |

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

▸ **getType**(): `MessageType`\<[`GiXAppRun`](GiXAppRun.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GiXAppRun`](GiXAppRun.md)\>

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
| `a` | `undefined` \| [`GiXAppRun`](GiXAppRun.md) \| `PlainMessage`\<[`GiXAppRun`](GiXAppRun.md)\> |
| `b` | `undefined` \| [`GiXAppRun`](GiXAppRun.md) \| `PlainMessage`\<[`GiXAppRun`](GiXAppRun.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:741](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L741)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GiXAppRun`](GiXAppRun.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GiXAppRun`](GiXAppRun.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L729)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GiXAppRun`](GiXAppRun.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXAppRun`](GiXAppRun.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:733](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L733)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GiXAppRun`](GiXAppRun.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXAppRun`](GiXAppRun.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L737)
