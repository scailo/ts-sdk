[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StoragesServicePaginationResponse

# Class: StoragesServicePaginationResponse

Response message for paginated queries, including total counts for UI elements.

**`Generated`**

from message Scailo.StoragesServicePaginationResponse

## Hierarchy

- `Message`\<[`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)\>

  ↳ **`StoragesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](StoragesServicePaginationResponse.md#constructor)

### Properties

- [count](StoragesServicePaginationResponse.md#count)
- [offset](StoragesServicePaginationResponse.md#offset)
- [payload](StoragesServicePaginationResponse.md#payload)
- [total](StoragesServicePaginationResponse.md#total)
- [fields](StoragesServicePaginationResponse.md#fields)
- [runtime](StoragesServicePaginationResponse.md#runtime)
- [typeName](StoragesServicePaginationResponse.md#typename)

### Methods

- [clone](StoragesServicePaginationResponse.md#clone)
- [equals](StoragesServicePaginationResponse.md#equals)
- [fromBinary](StoragesServicePaginationResponse.md#frombinary)
- [fromJson](StoragesServicePaginationResponse.md#fromjson)
- [fromJsonString](StoragesServicePaginationResponse.md#fromjsonstring)
- [getType](StoragesServicePaginationResponse.md#gettype)
- [toBinary](StoragesServicePaginationResponse.md#tobinary)
- [toJSON](StoragesServicePaginationResponse.md#tojson)
- [toJson](StoragesServicePaginationResponse.md#tojson-1)
- [toJsonString](StoragesServicePaginationResponse.md#tojsonstring)
- [equals](StoragesServicePaginationResponse.md#equals-1)
- [fromBinary](StoragesServicePaginationResponse.md#frombinary-1)
- [fromJson](StoragesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](StoragesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new StoragesServicePaginationResponse**(`data?`): [`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)\> |

#### Returns

[`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)

#### Overrides

Message\&lt;StoragesServicePaginationResponse\&gt;.constructor

#### Defined in

[src/storages.scailo_pb.ts:731](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L731)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/storages.scailo_pb.ts:701](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L701)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/storages.scailo_pb.ts:711](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L711)

___

### payload

• **payload**: [`Storage`](Storage.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.Storage payload = 4;

#### Defined in

[src/storages.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L729)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/storages.scailo_pb.ts:721](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L721)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/storages.scailo_pb.ts:738](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L738)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/storages.scailo_pb.ts:736](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L736)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StoragesServicePaginationResponse"``

#### Defined in

[src/storages.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L737)

## Methods

### clone

▸ **clone**(): [`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md) \| `PlainMessage`\<[`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md) \| `PlainMessage`\<[`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md) \| `PlainMessage`\<[`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/storages.scailo_pb.ts:757](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L757)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)

#### Defined in

[src/storages.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L745)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)

#### Defined in

[src/storages.scailo_pb.ts:749](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L749)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StoragesServicePaginationResponse`](StoragesServicePaginationResponse.md)

#### Defined in

[src/storages.scailo_pb.ts:753](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/storages.scailo_pb.ts#L753)
