[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoragesServiceUpdateRequest

# Class: StoragesServiceUpdateRequest

Request message for updating an existing Storage record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the name, and description
of an established Storage.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.StoragesServiceUpdateRequest

## Hierarchy

- `Message`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\>

  ↳ **`StoragesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](StoragesServiceUpdateRequest.md#constructor)

### Properties

- [description](StoragesServiceUpdateRequest.md#description)
- [id](StoragesServiceUpdateRequest.md#id)
- [name](StoragesServiceUpdateRequest.md#name)
- [notifyUsers](StoragesServiceUpdateRequest.md#notifyusers)
- [userComment](StoragesServiceUpdateRequest.md#usercomment)
- [fields](StoragesServiceUpdateRequest.md#fields)
- [runtime](StoragesServiceUpdateRequest.md#runtime)
- [typeName](StoragesServiceUpdateRequest.md#typename)

### Methods

- [clone](StoragesServiceUpdateRequest.md#clone)
- [equals](StoragesServiceUpdateRequest.md#equals)
- [fromBinary](StoragesServiceUpdateRequest.md#frombinary)
- [fromJson](StoragesServiceUpdateRequest.md#fromjson)
- [fromJsonString](StoragesServiceUpdateRequest.md#fromjsonstring)
- [getType](StoragesServiceUpdateRequest.md#gettype)
- [toBinary](StoragesServiceUpdateRequest.md#tobinary)
- [toJSON](StoragesServiceUpdateRequest.md#tojson)
- [toJson](StoragesServiceUpdateRequest.md#tojson-1)
- [toJsonString](StoragesServiceUpdateRequest.md#tojsonstring)
- [equals](StoragesServiceUpdateRequest.md#equals-1)
- [fromBinary](StoragesServiceUpdateRequest.md#frombinary-1)
- [fromJson](StoragesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](StoragesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoragesServiceUpdateRequest**(`data?`): [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\> |

#### Returns

[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Overrides

Message\&lt;StoragesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/storages.scailo_pb.ts:347](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L347)

## Properties

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Contextual details concerning environmental constraints, structural capacities, or unique access instructions for this storage unit.

**`Example`**

```ts
"Maintained at temperature thresholds between 2-4°C. Holds standard pharmaceutical pallets."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string description = 15;

#### Defined in

[src/storages.scailo_pb.ts:345](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L345)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/storages.scailo_pb.ts:301](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L301)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or friendly descriptive name of the storage zone or unit.

**`Example`**

```ts
"Cold Storage Vault Alpha"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 10;

#### Defined in

[src/storages.scailo_pb.ts:329](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L329)

___

### notifyUsers

• `Optional` **notifyUsers**: `boolean`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: optional bool notify_users = 3;

#### Defined in

[src/storages.scailo_pb.ts:313](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L313)

___

### userComment

• `Optional` **userComment**: `string`

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

from field: optional string user_comment = 1;

#### Defined in

[src/storages.scailo_pb.ts:285](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L285)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/storages.scailo_pb.ts:354](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L354)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/storages.scailo_pb.ts:352](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L352)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoragesServiceUpdateRequest"``

#### Defined in

[src/storages.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L353)

## Methods

### clone

▸ **clone**(): [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md) \| `PlainMessage`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md) \| `PlainMessage`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md) \| `PlainMessage`\<[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/storages.scailo_pb.ts:374](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L374)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Defined in

[src/storages.scailo_pb.ts:362](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L362)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Defined in

[src/storages.scailo_pb.ts:366](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L366)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServiceUpdateRequest`](StoragesServiceUpdateRequest.md)

#### Defined in

[src/storages.scailo_pb.ts:370](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/storages.scailo_pb.ts#L370)
