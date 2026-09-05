[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FamiliesServiceImageUpdateRequest

# Class: FamiliesServiceImageUpdateRequest

Request message for modifying the metadata (such as visibility or display order) of an existing family image attachment.

**`Generated`**

from message Scailo.FamiliesServiceImageUpdateRequest

## Hierarchy

- `Message`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\>

  ↳ **`FamiliesServiceImageUpdateRequest`**

## Table of contents

### Constructors

- [constructor](FamiliesServiceImageUpdateRequest.md#constructor)

### Properties

- [id](FamiliesServiceImageUpdateRequest.md#id)
- [isPublic](FamiliesServiceImageUpdateRequest.md#ispublic)
- [sequenceNumber](FamiliesServiceImageUpdateRequest.md#sequencenumber)
- [userComment](FamiliesServiceImageUpdateRequest.md#usercomment)
- [fields](FamiliesServiceImageUpdateRequest.md#fields)
- [runtime](FamiliesServiceImageUpdateRequest.md#runtime)
- [typeName](FamiliesServiceImageUpdateRequest.md#typename)

### Methods

- [clone](FamiliesServiceImageUpdateRequest.md#clone)
- [equals](FamiliesServiceImageUpdateRequest.md#equals)
- [fromBinary](FamiliesServiceImageUpdateRequest.md#frombinary)
- [fromJson](FamiliesServiceImageUpdateRequest.md#fromjson)
- [fromJsonString](FamiliesServiceImageUpdateRequest.md#fromjsonstring)
- [getType](FamiliesServiceImageUpdateRequest.md#gettype)
- [toBinary](FamiliesServiceImageUpdateRequest.md#tobinary)
- [toJSON](FamiliesServiceImageUpdateRequest.md#tojson)
- [toJson](FamiliesServiceImageUpdateRequest.md#tojson-1)
- [toJsonString](FamiliesServiceImageUpdateRequest.md#tojsonstring)
- [equals](FamiliesServiceImageUpdateRequest.md#equals-1)
- [fromBinary](FamiliesServiceImageUpdateRequest.md#frombinary-1)
- [fromJson](FamiliesServiceImageUpdateRequest.md#fromjson-1)
- [fromJsonString](FamiliesServiceImageUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FamiliesServiceImageUpdateRequest**(`data?`): [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\> |

#### Returns

[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Overrides

Message\&lt;FamiliesServiceImageUpdateRequest\&gt;.constructor

#### Defined in

[src/families.scailo_pb.ts:4282](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L4282)

## Properties

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

[src/families.scailo_pb.ts:4248](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L4248)

___

### isPublic

• **isPublic**: `boolean` = `false`

**`Mandatory`**

**`Description`**

A boolean flag indicating whether the image is publicly accessible (e.g., on external catalogs) or restricted to internal users.

**`Example`**

```ts
false
```

**`Regex`**

^(?:true|false)$

**`Format`**

Boolean true or false.

**`Generated`**

from field: bool is_public = 12;

#### Defined in

[src/families.scailo_pb.ts:4264](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L4264)

___

### sequenceNumber

• **sequenceNumber**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The updated ordering or display sequence of the image relative to other images in the family gallery.

**`Example`**

```ts
2
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: uint64 sequence_number = 13;

#### Defined in

[src/families.scailo_pb.ts:4280](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L4280)

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

[src/families.scailo_pb.ts:4232](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L4232)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/families.scailo_pb.ts:4289](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L4289)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/families.scailo_pb.ts:4287](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L4287)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FamiliesServiceImageUpdateRequest"``

#### Defined in

[src/families.scailo_pb.ts:4288](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L4288)

## Methods

### clone

▸ **clone**(): [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

Create a deep copy.

#### Returns

[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md) \| `PlainMessage`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\>

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
| `a` | `undefined` \| [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md) \| `PlainMessage`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\> |
| `b` | `undefined` \| [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md) \| `PlainMessage`\<[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/families.scailo_pb.ts:4308](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L4308)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:4296](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L4296)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:4300](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L4300)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FamiliesServiceImageUpdateRequest`](FamiliesServiceImageUpdateRequest.md)

#### Defined in

[src/families.scailo_pb.ts:4304](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/families.scailo_pb.ts#L4304)
