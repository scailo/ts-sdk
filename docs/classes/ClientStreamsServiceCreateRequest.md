[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ClientStreamsServiceCreateRequest

# Class: ClientStreamsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ClientStreamsServiceCreateRequest

## Hierarchy

- `Message`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\>

  ↳ **`ClientStreamsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ClientStreamsServiceCreateRequest.md#constructor)

### Properties

- [assignSelfAsClientSubscriber](ClientStreamsServiceCreateRequest.md#assignselfasclientsubscriber)
- [assignSelfAsInternalSubscriber](ClientStreamsServiceCreateRequest.md#assignselfasinternalsubscriber)
- [clientId](ClientStreamsServiceCreateRequest.md#clientid)
- [entityUuid](ClientStreamsServiceCreateRequest.md#entityuuid)
- [refFrom](ClientStreamsServiceCreateRequest.md#reffrom)
- [refId](ClientStreamsServiceCreateRequest.md#refid)
- [title](ClientStreamsServiceCreateRequest.md#title)
- [userComment](ClientStreamsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ClientStreamsServiceCreateRequest.md#vaultfolderid)
- [fields](ClientStreamsServiceCreateRequest.md#fields)
- [runtime](ClientStreamsServiceCreateRequest.md#runtime)
- [typeName](ClientStreamsServiceCreateRequest.md#typename)

### Methods

- [clone](ClientStreamsServiceCreateRequest.md#clone)
- [equals](ClientStreamsServiceCreateRequest.md#equals)
- [fromBinary](ClientStreamsServiceCreateRequest.md#frombinary)
- [fromJson](ClientStreamsServiceCreateRequest.md#fromjson)
- [fromJsonString](ClientStreamsServiceCreateRequest.md#fromjsonstring)
- [getType](ClientStreamsServiceCreateRequest.md#gettype)
- [toBinary](ClientStreamsServiceCreateRequest.md#tobinary)
- [toJSON](ClientStreamsServiceCreateRequest.md#tojson)
- [toJson](ClientStreamsServiceCreateRequest.md#tojson-1)
- [toJsonString](ClientStreamsServiceCreateRequest.md#tojsonstring)
- [equals](ClientStreamsServiceCreateRequest.md#equals-1)
- [fromBinary](ClientStreamsServiceCreateRequest.md#frombinary-1)
- [fromJson](ClientStreamsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ClientStreamsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ClientStreamsServiceCreateRequest**(`data?`): [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\> |

#### Returns

[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Overrides

Message\&lt;ClientStreamsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/client_streams.scailo_pb.ts:458](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L458)

## Properties

### assignSelfAsClientSubscriber

• **assignSelfAsClientSubscriber**: `boolean` = `false`

Assign self (the user creating the stream) as a client subscriber (this would allow client users to also create a stream)

**`Generated`**

from field: bool assign_self_as_client_subscriber = 81;

#### Defined in

[src/client_streams.scailo_pb.ts:456](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L456)

___

### assignSelfAsInternalSubscriber

• **assignSelfAsInternalSubscriber**: `boolean` = `false`

Assign self (the user creating the stream) as an internal subscriber

**`Generated`**

from field: bool assign_self_as_internal_subscriber = 80;

#### Defined in

[src/client_streams.scailo_pb.ts:449](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L449)

___

### clientId

• **clientId**: `bigint` = `protoInt64.zero`

The ID of the client

**`Generated`**

from field: uint64 client_id = 11;

#### Defined in

[src/client_streams.scailo_pb.ts:428](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L428)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/client_streams.scailo_pb.ts:400](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L400)

___

### refFrom

• **refFrom**: [`CLIENT_STREAM_REF_FROM`](../enums/CLIENT_STREAM_REF_FROM.md) = `CLIENT_STREAM_REF_FROM.CLIENT_STREAM_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.CLIENT_STREAM_REF_FROM ref_from = 12;

#### Defined in

[src/client_streams.scailo_pb.ts:435](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L435)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated reference ID

**`Generated`**

from field: uint64 ref_id = 13;

#### Defined in

[src/client_streams.scailo_pb.ts:442](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L442)

___

### title

• **title**: `string` = `""`

The title of the client stream

**`Generated`**

from field: string title = 10;

#### Defined in

[src/client_streams.scailo_pb.ts:421](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L421)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/client_streams.scailo_pb.ts:407](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L407)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 7;

#### Defined in

[src/client_streams.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L414)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/client_streams.scailo_pb.ts:465](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L465)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/client_streams.scailo_pb.ts:463](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L463)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ClientStreamsServiceCreateRequest"``

#### Defined in

[src/client_streams.scailo_pb.ts:464](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L464)

## Methods

### clone

▸ **clone**(): [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md) \| `PlainMessage`\<[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/client_streams.scailo_pb.ts:489](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L489)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Defined in

[src/client_streams.scailo_pb.ts:477](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L477)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Defined in

[src/client_streams.scailo_pb.ts:481](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L481)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ClientStreamsServiceCreateRequest`](ClientStreamsServiceCreateRequest.md)

#### Defined in

[src/client_streams.scailo_pb.ts:485](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/client_streams.scailo_pb.ts#L485)
