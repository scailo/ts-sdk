[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MagicLinksServiceCreateRequestForSpecificResource

# Class: MagicLinksServiceCreateRequestForSpecificResource

Describes the necessary data structure for creation of a magic link. This data structure is used within other services, while creating magic links for the given resource

**`Generated`**

from message Scailo.MagicLinksServiceCreateRequestForSpecificResource

## Hierarchy

- `Message`\<[`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)\>

  ↳ **`MagicLinksServiceCreateRequestForSpecificResource`**

## Table of contents

### Constructors

- [constructor](MagicLinksServiceCreateRequestForSpecificResource.md#constructor)

### Properties

- [description](MagicLinksServiceCreateRequestForSpecificResource.md#description)
- [domainPrefix](MagicLinksServiceCreateRequestForSpecificResource.md#domainprefix)
- [expiresAt](MagicLinksServiceCreateRequestForSpecificResource.md#expiresat)
- [maxViews](MagicLinksServiceCreateRequestForSpecificResource.md#maxviews)
- [resourceUuid](MagicLinksServiceCreateRequestForSpecificResource.md#resourceuuid)
- [userComment](MagicLinksServiceCreateRequestForSpecificResource.md#usercomment)
- [fields](MagicLinksServiceCreateRequestForSpecificResource.md#fields)
- [runtime](MagicLinksServiceCreateRequestForSpecificResource.md#runtime)
- [typeName](MagicLinksServiceCreateRequestForSpecificResource.md#typename)

### Methods

- [clone](MagicLinksServiceCreateRequestForSpecificResource.md#clone)
- [equals](MagicLinksServiceCreateRequestForSpecificResource.md#equals)
- [fromBinary](MagicLinksServiceCreateRequestForSpecificResource.md#frombinary)
- [fromJson](MagicLinksServiceCreateRequestForSpecificResource.md#fromjson)
- [fromJsonString](MagicLinksServiceCreateRequestForSpecificResource.md#fromjsonstring)
- [getType](MagicLinksServiceCreateRequestForSpecificResource.md#gettype)
- [toBinary](MagicLinksServiceCreateRequestForSpecificResource.md#tobinary)
- [toJSON](MagicLinksServiceCreateRequestForSpecificResource.md#tojson)
- [toJson](MagicLinksServiceCreateRequestForSpecificResource.md#tojson-1)
- [toJsonString](MagicLinksServiceCreateRequestForSpecificResource.md#tojsonstring)
- [equals](MagicLinksServiceCreateRequestForSpecificResource.md#equals-1)
- [fromBinary](MagicLinksServiceCreateRequestForSpecificResource.md#frombinary-1)
- [fromJson](MagicLinksServiceCreateRequestForSpecificResource.md#fromjson-1)
- [fromJsonString](MagicLinksServiceCreateRequestForSpecificResource.md#fromjsonstring-1)

## Constructors

### constructor

• **new MagicLinksServiceCreateRequestForSpecificResource**(`data?`): [`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)\> |

#### Returns

[`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)

#### Overrides

Message\&lt;MagicLinksServiceCreateRequestForSpecificResource\&gt;.constructor

#### Defined in

[src/magic_links.scailo_pb.ts:905](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L905)

## Properties

### description

• **description**: `string` = `""`

Stores an optional description of the magic link

**`Generated`**

from field: string description = 35;

#### Defined in

[src/magic_links.scailo_pb.ts:896](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L896)

___

### domainPrefix

• **domainPrefix**: `string` = `""`

The optional domain prefix that is used to generate the magic link. If this is empty, then the default authless access domain is used. This is useful in case the URL needs to point at a custom domain.

**`Generated`**

from field: string domain_prefix = 100;

#### Defined in

[src/magic_links.scailo_pb.ts:903](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L903)

___

### expiresAt

• **expiresAt**: `bigint` = `protoInt64.zero`

Stores the UNIX timestamp of when the link expires. If 0, then the link never expires

**`Generated`**

from field: uint64 expires_at = 30;

#### Defined in

[src/magic_links.scailo_pb.ts:882](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L882)

___

### maxViews

• **maxViews**: `bigint` = `protoInt64.zero`

The number of times that the magic link can be viewed. If -1, then the link can be viewed any number of times. If 0, then the link cannot be viewed at all.

**`Generated`**

from field: int64 max_views = 31;

#### Defined in

[src/magic_links.scailo_pb.ts:889](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L889)

___

### resourceUuid

• **resourceUuid**: `string` = `""`

The UUID of the resource

**`Generated`**

from field: string resource_uuid = 10;

#### Defined in

[src/magic_links.scailo_pb.ts:875](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L875)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/magic_links.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L868)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/magic_links.scailo_pb.ts:912](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L912)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/magic_links.scailo_pb.ts:910](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L910)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MagicLinksServiceCreateRequestForSpecificResource"``

#### Defined in

[src/magic_links.scailo_pb.ts:911](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L911)

## Methods

### clone

▸ **clone**(): [`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)

Create a deep copy.

#### Returns

[`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)

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
| `other` | `undefined` \| ``null`` \| [`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md) \| `PlainMessage`\<[`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)\> |

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

▸ **getType**(): `MessageType`\<[`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)\>

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
| `a` | `undefined` \| [`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md) \| `PlainMessage`\<[`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)\> |
| `b` | `undefined` \| [`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md) \| `PlainMessage`\<[`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)\> |

#### Returns

`boolean`

#### Defined in

[src/magic_links.scailo_pb.ts:933](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L933)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)

#### Defined in

[src/magic_links.scailo_pb.ts:921](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L921)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)

#### Defined in

[src/magic_links.scailo_pb.ts:925](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L925)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MagicLinksServiceCreateRequestForSpecificResource`](MagicLinksServiceCreateRequestForSpecificResource.md)

#### Defined in

[src/magic_links.scailo_pb.ts:929](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/magic_links.scailo_pb.ts#L929)
