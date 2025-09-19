[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GiXManifest

# Class: GiXManifest

Describes the manifest file of a GiX app. Stores the attributes that can be a part of the MANIFEST.yaml file, that is present in the root folder of a GiX app

**`Generated`**

from message Scailo.GiXManifest

## Hierarchy

- `Message`\<[`GiXManifest`](GiXManifest.md)\>

  ↳ **`GiXManifest`**

## Table of contents

### Constructors

- [constructor](GiXManifest.md#constructor)

### Properties

- [appName](GiXManifest.md#appname)
- [appUniqueIdentifier](GiXManifest.md#appuniqueidentifier)
- [appVersion](GiXManifest.md#appversion)
- [manifestVersion](GiXManifest.md#manifestversion)
- [maxGenesisVersion](GiXManifest.md#maxgenesisversion)
- [minGenesisVersion](GiXManifest.md#mingenesisversion)
- [resources](GiXManifest.md#resources)
- [fields](GiXManifest.md#fields)
- [runtime](GiXManifest.md#runtime)
- [typeName](GiXManifest.md#typename)

### Methods

- [clone](GiXManifest.md#clone)
- [equals](GiXManifest.md#equals)
- [fromBinary](GiXManifest.md#frombinary)
- [fromJson](GiXManifest.md#fromjson)
- [fromJsonString](GiXManifest.md#fromjsonstring)
- [getType](GiXManifest.md#gettype)
- [toBinary](GiXManifest.md#tobinary)
- [toJSON](GiXManifest.md#tojson)
- [toJson](GiXManifest.md#tojson-1)
- [toJsonString](GiXManifest.md#tojsonstring)
- [equals](GiXManifest.md#equals-1)
- [fromBinary](GiXManifest.md#frombinary-1)
- [fromJson](GiXManifest.md#fromjson-1)
- [fromJsonString](GiXManifest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GiXManifest**(`data?`): [`GiXManifest`](GiXManifest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GiXManifest`](GiXManifest.md)\> |

#### Returns

[`GiXManifest`](GiXManifest.md)

#### Overrides

Message\&lt;GiXManifest\&gt;.constructor

#### Defined in

[src/vault_commons.scailo_pb.ts:582](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L582)

## Properties

### appName

• **appName**: `string` = `""`

Stores the name of the application

**`Generated`**

from field: string app_name = 3 [json_name = "app_name"];

#### Defined in

[src/vault_commons.scailo_pb.ts:552](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L552)

___

### appUniqueIdentifier

• **appUniqueIdentifier**: `string` = `""`

Stores the unique identifier for the application

**`Generated`**

from field: string app_unique_identifier = 4 [json_name = "app_unique_identifier"];

#### Defined in

[src/vault_commons.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L559)

___

### appVersion

• **appVersion**: `string` = `""`

Stores the application version

**`Generated`**

from field: string app_version = 2 [json_name = "app_version"];

#### Defined in

[src/vault_commons.scailo_pb.ts:545](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L545)

___

### manifestVersion

• **manifestVersion**: `string` = `""`

Stores the manifest version

**`Generated`**

from field: string manifest_version = 1 [json_name = "manifest_version"];

#### Defined in

[src/vault_commons.scailo_pb.ts:538](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L538)

___

### maxGenesisVersion

• **maxGenesisVersion**: `string` = `""`

Stores the manimum version of Scailo that the application supports

**`Generated`**

from field: string max_genesis_version = 6 [json_name = "max_genesis_version"];

#### Defined in

[src/vault_commons.scailo_pb.ts:573](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L573)

___

### minGenesisVersion

• **minGenesisVersion**: `string` = `""`

Stores the minimum version of Scailo that the application supports

**`Generated`**

from field: string min_genesis_version = 5 [json_name = "min_genesis_version"];

#### Defined in

[src/vault_commons.scailo_pb.ts:566](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L566)

___

### resources

• `Optional` **resources**: [`GixResources`](GixResources.md)

Stores the resources of the GiX application

**`Generated`**

from field: Scailo.GixResources resources = 7;

#### Defined in

[src/vault_commons.scailo_pb.ts:580](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L580)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vault_commons.scailo_pb.ts:589](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L589)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vault_commons.scailo_pb.ts:587](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L587)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GiXManifest"``

#### Defined in

[src/vault_commons.scailo_pb.ts:588](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L588)

## Methods

### clone

▸ **clone**(): [`GiXManifest`](GiXManifest.md)

Create a deep copy.

#### Returns

[`GiXManifest`](GiXManifest.md)

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
| `other` | `undefined` \| ``null`` \| [`GiXManifest`](GiXManifest.md) \| `PlainMessage`\<[`GiXManifest`](GiXManifest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GiXManifest`](GiXManifest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GiXManifest`](GiXManifest.md)\>

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
| `a` | `undefined` \| [`GiXManifest`](GiXManifest.md) \| `PlainMessage`\<[`GiXManifest`](GiXManifest.md)\> |
| `b` | `undefined` \| [`GiXManifest`](GiXManifest.md) \| `PlainMessage`\<[`GiXManifest`](GiXManifest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vault_commons.scailo_pb.ts:611](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L611)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GiXManifest`](GiXManifest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GiXManifest`](GiXManifest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:599](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L599)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GiXManifest`](GiXManifest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXManifest`](GiXManifest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:603](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L603)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GiXManifest`](GiXManifest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GiXManifest`](GiXManifest.md)

#### Defined in

[src/vault_commons.scailo_pb.ts:607](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/vault_commons.scailo_pb.ts#L607)
